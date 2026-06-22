#!/usr/bin/env bash
# ─────────────────────────────────────────────
#  rofi-launcher — hierarchical tool menu
#  Config lives in the TOOLS array below.
#  Format: "CATEGORY|TOOL_NAME|DESCRIPTION|EXEC"
#  Use CATEGORY="__ROOT__" for top-level shortcuts.
# ─────────────────────────────────────────────

# ══════════════════════════════════════════════
#  CONFIGURATION  —  edit everything here
# ══════════════════════════════════════════════
TOOLS=(
  # ── System ──────────────────────────────────
  "System|Htop|Interactive process viewer|footclient -e htop"
  "System|Btop|Resource monitor|footclient -e btop"
  "System|Neofetch|System info|footclient -e neofetch"
  "System|Disk Usage|Disk usage analyzer|footclient -e ncdu /"
  "System|Journalctl|Live system logs|footclient -e journalctl -f"

  # ── Network ─────────────────────────────────
  "Network|Nmap|Network scanner|footclient -e nmap -h"
  "Network|Bmon|Bandwidth monitor|footclient -e bmon"
  "Network|Iftop|Network traffic monitor|footclient -e sudo iftop"
  "Network|Speedtest|Internet speed test|footclient -e speedtest-cli"

  # ── Dev Tools ───────────────────────────────
  "Dev|Lazygit|Git TUI|footclient -e lazygit"
  "Dev|Ranger|File manager|footclient -e ranger"
  "Dev|Nvim|Text editor|footclient -e nvim"
  "Dev|Httpie|HTTP client TUI|footclient -e http --help"
  "Dev|Pgcli|PostgreSQL TUI|footclient -e pgcli"

  # ── Media ───────────────────────────────────
  "Media|Cmus|Music player|footclient -e cmus"
  "Media|Feh|Image viewer|feh --auto-zoom ~"
  "Media|MPV|Video player|mpv"

  # ── Utilities ───────────────────────────────
  "Utilities|Tmux|Terminal multiplexer|footclient -e tmux"
  "Utilities|Fzf Demo|Fuzzy finder demo|footclient -e fzf"
  "Utilities|Calc|Terminal calculator|footclient -e bc -l"

  # ── Root-level shortcuts (no submenu) ───────
  "__ROOT__|Clipboard|Show clipboard history|clipmenu"
  "__ROOT__|Screenshot|Take a screenshot|scrot ~/Pictures/screenshot_%Y%m%d_%H%M%S.png"
  "__ROOT__|Lock Screen|Lock the session|loginctl lock-session"
  "__ROOT__|Nmtui|Network Manager TUI|footclient -e --title nmtui-float nmtui"
)

# ══════════════════════════════════════════════
#  INTERNALS  —  no need to edit below
# ══════════════════════════════════════════════

# ── helpers ──────────────────────────────────
rofi_menu() {
  local prompt="$1"; shift
  local items=("$@")
  printf '%s\n' "${items[@]}" | rofi -dmenu \
    -p "$prompt" \
    -selected-row 0 \
    -theme-str '
      * { font: "JetBrainsMono Nerd Font Propo 15"; }
      window { width: 600px; border-radius: 12px; }
      listview { lines: 10; fixed-height: false; }
      element { padding: 8px; }
      element-text { margin: 0 8px; }
      scrollbar { handle-width: 0px; width: 0px; }
      listview { padding: 0px; margin: 0px; }
      entry { placeholder: "Search..."; }
      prompt { enabled: true; }' \
    2>/dev/null
}

notify() {
  if command -v notify-send &>/dev/null; then
    notify-send "Launcher" "$1" -t 2000
  else
    echo "[launcher] $1" >&2
  fi
}

# ── collect unique categories ─────────────────
declare -A cat_set
root_tools=()

for entry in "${TOOLS[@]}"; do
  IFS='|' read -r cat name desc exec_cmd <<< "$entry"
  if [[ "$cat" == "__ROOT__" ]]; then
    root_tools+=("$name  —  $desc")
  else
    cat_set["$cat"]=1
  fi
done

# sort categories alphabetically
IFS=$'\n' sorted_cats=($(sort <<< "${!cat_set[*]}")); unset IFS

# ── build main menu ───────────────────────────
main_menu=()
for cat in "${sorted_cats[@]}"; do
  main_menu+=("📁 $cat")
done
for item in "${root_tools[@]}"; do
  main_menu+=("🛠 $item")
done

# ── main loop ─────────────────────────────────
while true; do
  choice=$(rofi_menu "  Launcher" "${main_menu[@]}")
  [[ -z "$choice" ]] && exit 0

  # ── root-level shortcut? ─────────────────
  # FIX: check start of string (🛠*), not end (*🛠)
  if [[ "$choice" == "🛠"* ]]; then
    raw="${choice#🛠 }"
    tool_name="${raw%%  —  *}"

    for entry in "${TOOLS[@]}"; do
      IFS='|' read -r cat name desc exec_cmd <<< "$entry"
      if [[ "$cat" == "__ROOT__" && "$name" == "$tool_name" ]]; then
        notify "Launching $name…"
        eval "$exec_cmd"
        break  # app closed → fall through to reopen menu
      fi
    done
    continue
  fi

  # ── category selected ─────────────────────
  # FIX: strip the "📁 " prefix (emoji + space), not just a plain space
  selected_cat="${choice#📁 }"

  # FIX: unset before declare to avoid stale keys across loop iterations
  unset tool_map
  declare -A tool_map

  submenu=()
  for entry in "${TOOLS[@]}"; do
    IFS='|' read -r cat name desc exec_cmd <<< "$entry"
    if [[ "$cat" == "$selected_cat" ]]; then
      display="$(printf '%-18s  %s' "$name" "$desc")"
      submenu+=("$display")
      tool_map["$display"]="$exec_cmd"
    fi
  done

  sub_choice=$(rofi_menu "  $selected_cat" "${submenu[@]}")
  [[ -z "$sub_choice" ]] && continue   # go back to main menu

  exec_cmd="${tool_map[$sub_choice]}"
  if [[ -n "$exec_cmd" ]]; then
    tool_name="${sub_choice%%  *}"
    notify "Launching $tool_name…"
    eval "$exec_cmd"
    # app closed → loop continues, menu reopens
  fi

done
