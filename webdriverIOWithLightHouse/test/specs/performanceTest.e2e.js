import assert from "node:assert";

describe("Check the Client Side Performance of a Magento Testing Website", async() => {
    before(async() => {
        await browser.enablePerformanceAudits();
        await browser.url(
            "https://magento.softwaretestingboard.com/customer/account/login"
        );
    });

    it("Verify the Good First ContentFul Paint Should be between 0 seconds and 1.8 seconds", async() => {
        let FCFmetrics = await browser.getMetrics();
        assert.ok(FCFmetrics.firstContentfulPaint <= 1800);
    });

    it("Verify the Good Largest ContentFul Paint Should be between 0 seconds and 1.2 seconds", async() => {
        let LCFmetrics = await browser.getMetrics();
        assert.ok(LCFmetrics.largestContentfulPaint <= 1200);
    });

    it("Verify the Good Cumulative Layout Shift Should be less than 0.1", async() => {
        let CLSmetrics = await browser.getMetrics();
        assert.ok(CLSmetrics.cumulativeLayoutShift <= 100);
    });

    it("Verify an Ideal Total Blocking Time Should be between 0 seconds and 150 milliseconds", async() => {
        let TBTmetrics = await browser.getMetrics();
        assert.ok(TBTmetrics.totalBlockingTime <= 150);
    });

    it("Verify the Good Speed Index Should be between 0 seconds and 1.3 seconds", async() => {
        let SImetrics = await browser.getMetrics();
        assert.ok(SImetrics.speedIndex <= 1300);
    });

    it("Verify the overall Performance Score should be 99% or higher", async() => {
        let score = await browser.getPerformanceScore();
        assert.ok(score >= 0.99);
    });
});