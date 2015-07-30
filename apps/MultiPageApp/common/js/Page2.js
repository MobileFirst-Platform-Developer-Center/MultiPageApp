/**
* Copyright 2015 IBM Corp.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

currentPage={};

currentPage.init = function() {
	WL.Logger.debug("Page2 :: init");
};

currentPage.buttonClick = function() {
	WL.Logger.debug("Page2 :: buttonClick");
	WL.SimpleDialog.show("Page2","Button on Page2 was clicked",[{text:'OK'}]);
};

currentPage.loadPage1 = function(){
	WL.Logger.debug("Page2 :: loadPage1");
	pagesHistory.push(path + "pages/Page2.html");
	$("#pagePort").load(path + "pages/Page1.html", function(){
		$.getScript(path + "js/Page1.js", function() {
			if (currentPage.init) {
				currentPage.init();
			}
		});
	});
};

currentPage.back = function(){
	WL.Logger.debug("Page2 :: back");
	$("#pagePort").load(pagesHistory.pop());
};
