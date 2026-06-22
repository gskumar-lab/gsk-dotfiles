$(document).ready(function(){
	const maxPinnedLength = 4;
	var currentTime = Date.now();
	var jsonUrl = "https://ik.imagekit.io/op7omfht9c/app-data.json?updatedAt=" + currentTime;
	
	window.oncontextmenu = function () {
		// return false;
	}

	if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
		$('html').attr('data-theme', 'dark');
	}else{
		$('html').removeAttr('data-theme');
	}

	$(document).on('click', '[data-onclick]', function(){
		chrome.tabs.create({url: $(this).attr('data-onclick'), active: false});
		close();
	});

	function fetchData(url){
		return $.ajax({
			type : "GET",
			url : url
		});
	}

	function showCategory(data){
		$('.categ-section-data').html("");

		data.forEach(function(categ){
			var categSkeleton = '<div class="tof-search-tool category-list" data-categ="'+categ.name+'"> <div class="tof-search-tool-logo"> <img src="https://ik.imagekit.io/op7omfht9c/images/categ/tr:w-50,h-50/'+categ.image+'" width="30" height="30"> </div> <div class="tof-search-tool-name">'+categ.name+'</div> </div>';

			$('.categ-section-data').append(categSkeleton);
		});
	}

	function showTools(data, categ){
		var toolData;

		data.forEach(function(eachCateg){
			if(eachCateg.name.toLowerCase() == categ.toLowerCase()){
				toolData = eachCateg.tools;
			}
		});

		$('.tools-section-data').html("");

		chrome.storage.local.get(["tools"]).then((result) => {
			var pinStatus = "";

			if(result.tools.length >= maxPinnedLength){
				pinStatus = "disable-pin";
			}

			toolData.forEach(function(toolDetail){
				var pinnedStatus = "";
				var showPinTool = pinStatus;

				if(result.tools.some(elem => elem.name == toolDetail.name)){
					pinnedStatus += "pinned";
					showPinTool = "";
				}else{
					showPinTool = pinStatus;
				}

				var toolSkeleton = '<div class="tof-search-tool show-pin '+showPinTool+'" data-type="tool" data-onclick="https://www.toolsoverflow.com'+toolDetail.url+'"> <div class="tof-search-tool-logo"> <img src="https://ik.imagekit.io/op7omfht9c/images/ticons/tr:w-30,h-30/'+toolDetail.image+'" width="30" height="30"> </div> <div class="tof-search-tool-name">'+toolDetail.name+'</div> <button class="pin-tool '+pinnedStatus+'"> <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="m634-448 86 77v60H510v241l-30 30-30-30v-241H240v-60l80-77v-333h-50v-60h414v60h-50v333Z"/></svg> </button> </div>';
				$('.tools-section-data').append(toolSkeleton);
			});
		});
	}

	Array.prototype.random = function(){
		return this[Math.floor(Math.random() * this.length)];
	};

	function setTool(tool){
		var toolData = [];

		chrome.storage.local.get(["tools"]).then((result) => {
			var otherTools = result.tools;

			if(otherTools.length < maxPinnedLength){
				if(!otherTools.some(elem => elem.name == tool.name)){
					toolData.push(tool);
				}
				
				otherTools.forEach(function(val){
					toolData.push(val);
				});

				chrome.storage.local.set({tools : toolData}).then(() => {
					getTool().then((result) => {
						if(result.tools.length >= maxPinnedLength){
							$('.pin-tool').not('.pinned').parent().addClass('disable-pin');
						}
					});
				});
			}
		});
	}

	function removeTool(toolName){
		chrome.storage.local.get(["tools"]).then((result) => {
			var toolData = result.tools.filter(val => val.name != toolName);
			chrome.storage.local.set({tools : toolData});
		});
	}

	function getTool(){
		return chrome.storage.local.get(["tools"]);
	}

	function showPinnedTools(){
		getTool().then((result) => {
			var pinnedTools = result.tools;

			$('.tof-search-tool-container').html("");

			if(pinnedTools.length > 0){
				$('.tof-search-notool').addClass('hidden');
				pinnedTools.forEach(function(pinnedTool){
					var pinnedToolList = '<div class="tof-search-tool pinned-tool show-pin" data-type="pinned" data-onclick="'+pinnedTool.url+'"> <div class="tof-search-tool-logo"> <img src="'+pinnedTool.image+'" width="30" height="30"> </div> <div class="tof-search-tool-name">'+pinnedTool.name+'</div> <button class="pin-tool popup-pinned"> <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="m634-448 86 77v60H510v241l-30 30-30-30v-241H240v-60l80-77v-333h-50v-60h414v60h-50v333Z"/></svg> </button> </div>';
					$('.tof-search-tool-container').append(pinnedToolList);
				});
			}else{
				$('.tof-search-notool').removeClass('hidden');
			}
		});
	}

	function showSearchedTools(toolData){
		getTool().then((result) => {
			var pinStatus = "";

			if(result.tools.length >= maxPinnedLength){
				pinStatus = "disable-pin";
			}

			$('.tof-search-notool').addClass('hidden');
			$('.tof-search-tool-container').html("");
			
			if(toolData.length > 0){
				var limit = maxPinnedLength;

				toolData.forEach(function(toolDetail){
					if(limit > 0){
						var pinnedStatus = "";
						var showPinTool = pinStatus;

						if(result.tools.some(elem => elem.name == toolDetail.name)){
							pinnedStatus += "pinned";
							showPinTool = "";
						}else{
							showPinTool = pinStatus;
						}

						var toolSkeleton = '<div class="tof-search-tool show-pin '+showPinTool+'" data-type="tool" data-onclick="https://www.toolsoverflow.com'+toolDetail.url+'"> <div class="tof-search-tool-logo"> <img src="https://ik.imagekit.io/op7omfht9c/images/ticons/tr:w-30,h-30/'+toolDetail.image+'" width="30" height="30"> </div> <div class="tof-search-tool-name">'+toolDetail.name+'</div> <button class="pin-tool '+pinnedStatus+'"> <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="m634-448 86 77v60H510v241l-30 30-30-30v-241H240v-60l80-77v-333h-50v-60h414v60h-50v333Z"/></svg> </button> </div>';
						$('.tof-search-tool-container').append(toolSkeleton);

						limit--;
					}
				});
			}else{
				$('.tof-search-notool').removeClass('hidden');
				showPinnedTools();
			}
		});
	}

	// Default Value
	getTool().then((res) => {
		if(!res.hasOwnProperty('tools')){
			var toolData = [];
			chrome.storage.local.set({tools : toolData});
		}else{
			// Show Pinned Tools
			showPinnedTools();
		}
	});

	fetchData(jsonUrl).then(function(data){
		const appData = data;

		$('#search-tool').focus();
		$('.tof-popular-category-card').removeClass('loader');

		// Site Script
		$(document).on('click', '.pin-tool', function(e){
			e.stopPropagation();
			
			if($(this).parent().attr('data-type') == 'pinned'){
				// Remove the Pinned Tool
				$(this).parent().remove();

				if($('.pinned-tool').length == 0){
					$('.tof-search-notool').removeClass('hidden');
				}

				removeTool($(this).parent().find('.tof-search-tool-name').text().trim());
			}else{
				$(this).addClass('pinned');

				// Set the Pinned Tool
				var toolData = {
					image : $(this).parent().find('.tof-search-tool-logo img').attr('src'),
					name : $(this).parent().find('.tof-search-tool-name').text().trim(),
					url : $(this).parent().attr('data-onclick')
				};

				setTool(toolData);
			}
		});

		// Searche Result
		$('#search-tool').on('input', function(){
			var searchedQuery = $(this).val().trim();

			if(searchedQuery != ""){
				var tools = [];
				var matchedTools = [];

				appData.forEach((elem) => {
					tools = tools.concat(elem.tools);
				});

				matchedTools = tools.filter((el) => {
					if(el.name.toLowerCase().indexOf(searchedQuery.toLowerCase()) !== -1){
						return true;
					}

					return false;
				});

				showSearchedTools(matchedTools);
			}else{
				showPinnedTools();
			}
		});

		$('.show-all-category').on('click', function(){
			$('.tof-content-wrapper').removeClass('hidden');
			$('.home, .tools').addClass('hidden');

			showCategory(appData);
		});

		$('.categ-back').on('click', function(){
			$('.tof-content-wrapper').removeClass('hidden');
			$('.tools, .category').addClass('hidden');

			showPinnedTools();
		});

		$('.tools-back').on('click', function(){
			$('.tof-content-wrapper').removeClass('hidden');
			$('.tools, .home').addClass('hidden');

			showCategory(appData);
		});

		$(document).on('click', '.category-list', function(){
			$('.tof-content-wrapper').removeClass('hidden');
			$('.home, .category').addClass('hidden');

			$('.tools-section-head-name').html($(this).attr('data-categ'));

			showTools(appData, $(this).attr('data-categ'));
		});

		// Load a category on document ready
		var randCateg = appData.random();
		$('.onloadCateg').attr('data-categ', randCateg.name);
		$('.onloadCateg').html('<div class="tof-popular-category-logo"> <img src="https://ik.imagekit.io/op7omfht9c/images/categ/tr:w-50,h-50/'+randCateg.image+'" width="50" height="50"/> </div> <div class="tof-popular-category-name">'+randCateg.name+'</div>');
	});

	if(!navigator.onLine){
		console.log('offline');
		$('.tof-content, .tof-popular-category').addClass('hidden');
		$('#offline-content').removeClass('hidden');
	}
});