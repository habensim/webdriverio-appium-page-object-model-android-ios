describe('iOS Native Features', () => {
    it('Working with alert box', async () => {
        await $('~Alert Views').click();
        await $('~Okay / Cancel').click();

        // await $('~OK').click();

        console.log(await driver.getAlertText());
        //click cancel
        await driver.dismissAlert();

        await expect($('~OK')).not.toExist();
    });

    it.only('Working with Scrollable elements', async() => {
        //easiest
        // you can set scroll to any direction - "down", "up", "left", "right"
        // await driver.execute('mobile: scroll', {direction: "down"});
        // await driver.execute('mobile: scroll', {direction: "up"});

        //complex
        await $('~Picker View').click();

        const redPicker = await $('~Red color component value');
        const greenPicker = await $('~Green color component value');
        const bluePicker = await $('~Blue color component value');

        // set purple color (125,0,125)
        await redPicker.addValue('125');
        await greenPicker.addValue('0');
        await bluePicker.addValue('125');
        // await driver.execute('mobile: scroll', {element: redPicker.elementId ,direction: "down"});
        // await driver.execute('mobile: scroll', {element: bluePicker.elementId ,direction: "up"});

        await driver.pause(2000);
    });
});