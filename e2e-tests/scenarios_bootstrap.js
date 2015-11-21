'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

xdescribe('UI Bootstrap', function() {


  it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
    browser.get('/bootstrap/index.html');
    //browser.pause();

    //expect(browser.getLocationAbsUrl()).toMatch("");
  });


  describe('shows index page', function() {

    beforeEach(function() {
      browser.get('/bootstrap/index.html');
    });

    it('should allow toggling the last panel', function() {
      element(by.buttonText('Toggle last panel')).click();
      var el = element(by.css('.panel-collapse.in.collapse .panel-body span.ng-scope'));
      expect(el.isDisplayed()).toBeTruthy();
    });

    it('should allow disabling toggling', function() {
      //browser.pause();
      var b = element.all(by.css('.btn.btn-default.btn-sm'));
      b.get(1).click();
      element(by.css('.panel.panel-default.panel-open .panel-heading .panel-title')).click();
      var el = element.all(by.css('.panel-collapse.collapse .panel-body span.ng-scope'));
      expect(el.first().isDisplayed()).toBeTruthy();
    });

    it('should allow enabling toggling', function() {
      var b = element.all(by.css('.btn.btn-default.btn-sm'));
      b.get(1).click(); //disable
      b.get(1).click(); //then enable again
      element(by.css('.panel.panel-default.panel-open .panel-heading .panel-title')).click();
      var el = element.all(by.css('.panel-collapse.collapse .panel-body span.ng-scope'));
      browser.pause();
      expect(el.first().isDisplayed()).toBeFalsy();
    });

  });



});
