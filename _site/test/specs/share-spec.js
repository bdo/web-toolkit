function shareSpec(share) {

    var describeSpec = 'Share module with click';

    describe(describeSpec, function () {

        it('clicking share link should open the popup', function () {
            expect($('.share-popup.active').length).to.equal(0);
            $('.summary').click();
            expect($('.share-popup.active').length).to.equal(1);
            $('.summary').click();
            expect($('.share-popup.active').length).to.equal(0);
        });

        it(' Pressing enter on share link should open popup', function () {
            expect($('.share-popup.active').length).to.equal(0);
            var e = jQuery.Event("keypress");
            e.which = 13; // # Some key code value
            $(".summary").trigger(e);
            expect($('.share-popup.active').length).to.equal(1);
            $(".summary").trigger(e);
            expect($('.share-popup.active').length).to.equal(0);
        });

        it('Pressing any key should not open share popup', function () {
            expect($('.share-popup.active').length).to.equal(0);
            var e = jQuery.Event("keypress");
            e.which = 12; // # Some key code value
            $(".summary").trigger(e);
            expect($('.share-popup.active').length).to.equal(0);
        });
    });

    return describeSpec;
}

if (window.define) {
    require(['chai','components/share'], function (chai, share) {
            window.chai = chai;
            window.assert = chai.assert;
            window.expect = chai.expect;
            window.to = chai.to;
            return shareSpec(share);
        }
    );
}