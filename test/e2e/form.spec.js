/* 
* @Author: pedromello
* @Date:   2015-08-27 00:40:03
* @Last Modified by:   pedromello
* @Last Modified time: 2015-08-27 01:46:22
*/

'use strict';

describe("TWA Angular Test",function(){

	describe("index page",function(){
		var firstName = element(by.name("firstName")),
			lastName = element(by.name("last_name")),
			emailAddress = element(by.name("emailAddress")),
			dob = element(by.name("dob")),
			subscribed = element(by.name("subscribed"));

		beforeEach(function() 
		{
		    browser.get("/#");
		});

		it("should display the correct title",function(){
			
			expect(browser.getTitle()).toBe("TWA Angular.js Test");
		});

		it("shoudl display the correct information after load json",function(){

			browser.waitForAngular();
			element(by.name('loadButton')).click();
			
			expect(firstName.getAttribute("value")).toBe("Fred");
			expect(lastName.getAttribute("value")).toBe("Bloggs");
			expect(emailAddress.getAttribute("value")).toBe("fredd@bloggs.com");
			expect(subscribed.getAttribute("value")).toBe('on');//true
			expect(dob.getAttribute("value")).toBe("02/09/1980");//Formatted
			
		});

		it("should submit form after validation",function(){
			//set values manually
			element(by.name('loadButton')).click();
			element(by.name('submitButton')).click();

			expect(browser.getCurrentUrl()).toBe("http://localhost:8080/#/submitted");
		});
	});
});