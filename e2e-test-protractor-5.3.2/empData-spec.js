describe('angularjs-based employee data navigation', function() {
	var originalTimeout;
	
    beforeEach(function() {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
		browser.get('http://localhost:5000');
    });

    afterEach(function() {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });  

	it('should find four render options', function() {
		var options;
		options = element.all(by.tagName('option')); 
		expect(options.count()).toEqual(5);
	});
	
	it('should find 14 employee records', function() {
		let recs = element.all(by.repeater('e in searchResult'));
		expect(recs.count()).toEqual(14);
	});

});