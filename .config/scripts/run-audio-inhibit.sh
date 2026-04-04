#!/bin/bash

# wait for audio system to be ready
sleep 5

# run in a persistent loop
while true; do
    # specify sink if needed: --sink alsa_output.pci-0000_00_1b.0.analog-stereo
    sway-audio-idle-inhibit
    sleep 2
done
