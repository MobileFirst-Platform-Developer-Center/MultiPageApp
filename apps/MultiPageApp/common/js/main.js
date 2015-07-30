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

var pagesHistory = [];
var currentPage = {};
var path = "";

function wlCommonInit(){
	
	// Special case for Windows Phone 8 only.
	if (WL.Client.getEnvironment() == WL.Environment.WINDOWS_PHONE_8) {
	    path = "/www/default/";
	}
	
	$("#pagePort").load(path + "pages/MainPage.html", function(){
		$.getScript(path + "js/MainPage.js", function() {
			if (currentPage.init) {
				currentPage.init();
			}
		});
	});
}