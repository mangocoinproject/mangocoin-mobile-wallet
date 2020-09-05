# MangoVault - A mobile, native Mangocoin MNG wallet

The initial release of Mangocoin MangoVault is built for the Android mobile platform. We have plans for an IOS release at a later time. Check the [MangoVault Releases page](https://github.com/mangocoinproject/mangocoin-mobile-wallet/releases/latest) for the latest release.

### Initial Setup

* `cd mangocoin-mobile-wallet`
* `yarn install`

### Running

* `node --max-old-space-size=8192 node_modules/react-native/local-cli/cli.js start` (Just need to run this once to start the server, leave it running)
* `react-native run-android`

### Logging

`react-native log-android`

### Creating a release

You need to bump the version number in:

* `src/Config.js` - `appVersion`
* `android/app/build.gradle` - `versionCode` and `versionName`
* `package.json` - `version` - Not strictly required
* Update user agent in `MainApplication.java` and `TurtleCoinModule.java`

Then
`cd android`
`./gradlew bundleRelease`
Optionally
`./gradlew installRelease`

or `yarn deploy-android`

### Integrating QR Codes or URIs

MangoVault supports two kinds of QR codes.

* Standard addresses / integrated addresses - This is simply the address encoded as a QR code.

* mangocoin:// URI encoded as a QR code.

Your uri must being with `mangocoin://` followed by the address to send to, for example, `mangocoin://MEpLh1LswBqihtwVB7VuYAQP7E39SYSwVQwFVyAjpGd6fdALVvZk74YTq5jTo4DNnTdkw2wcWCzJ2EtVJ9k9DhioBWQ7GGq`

There are a few optional parameters.

* `name` - This is used to add you to the users address book, and identify you on the 'Confirm' screen. A name can contain spaces, and should be URI encoded.
* `amount` - This is the amount to send you. This should be specified in atomic units.
* `paymentid` - If not using integrated address, you can specify a payment ID. Specifying an integrated address and a payment ID is illegal.

An example of a URI containing all of the above parameters:

```
mangocoin://MEpLh1LswBqihtwVB7VuYAQP7E39SYSwVQwFVyAjpGd6fdALVvZk74YTq5jTo4DNnTdkw2wcWCzJ2EtVJ9k9DhioBWQ7GGq?amount=200000000&name=Starbucks%20Coffee&paymentid=f13adc8ac78eb22ffcee3f82e0e9ffb251dc7dc0600ef599087a89b623ca1402
```

This would send `2 MNG` (200000000 in atomic units) to the address `MEpLh1LswBqihtwVB7VuYAQP7E39SYSwVQwFVyAjpGd6fdALVvZk74YTq5jTo4DNnTdkw2wcWCzJ2EtVJ9k9DhioBWQ7GGq`, using the name `Starbucks Coffee` (Note the URI encoding), and using a payment ID of `f13adc8ac78eb22ffcee3f82e0e9ffb251dc7dc0600ef599087a89b623ca1402`

You can also just display the URI as a hyperlink. If a user clicks the link, it will open the app, and jump to the confirm screen, just as a QR code would function. (Provided all the fields are given)
<<<<<<< HEAD

## Running natively on your Android device

Follow [this](https://facebook.github.io/react-native/docs/running-on-device.html) guide.

## Building an APK

Follow [this](https://facebook.github.io/react-native/docs/signed-apk-android.html) guide.

Once you have finished, compile the APK:

`yarn build-android`

Install the APK on your device:

`yarn deploy-android`

If it all works, you can then upload to the play store.

Note that you need to close the emulator to get the `yarn deploy-android` to install on your mobile.

## Forking

Start by cloning the latest tagged release. If it's not in a release, it has not been fully tested, and may have bugs.

#### Modifying icon

Replace `assets/img/icon.png` with your icon image. Make sure it is 1024x1024.

Run `npm install -g yo generator-rn-toolbox` (You may need to run this with sudo)

Run `yo rn-toolbox:assets --icon assets/img/icon.png --force`

When it asks for the name of your react-native project, enter `TonChan`

#### Renaming app

There is a tool that does this, `react-native-rename`. However, the native code, (`android/app/src/main/jni/TurtleCoin.cpp`) needs the name of the class to find the Java/C++ interface.

If you use this tool, you will probably need to update that code.

Run `npm install -g react-native-rename` (You may need to run this with sudo)

Run `react-native-rename your-new-project-name` from this directory. (Obviously, replace with the desired name)

This might confuse the build system. You probably should do this before installing.

#### Building an APK

You will need to set up your signing key, and keystore file. See https://facebook.github.io/react-native/docs/signed-apk-android.html#generating-a-signing-key

#### Config

Edit `src/Config.js`. The fields should be self explanatory. Make sure to recompile.

#### Sentry

Sentry is a tool to report crashes in the application. *Please* configure this, or disable it, so we do not get reported errors for your application.

Remove the two files `android/sentry.properties` and `ios/sentry.properties`, and then run `react-native link`.

This will run the sentry setup wizard, to setup error reporting for your app.

Then, copy the line of code `Sentry.config('https://d2494cb646104ac4b50092cd2170f2cd@sentry.io/5182034').install();` that is shown on the configuration page, and replace with our line in `src/Sentry.js`.

Your API key will be different, don't just copy the one here.

Finally, replace `Config.coinName === 'Mangocoin'` in `src/Sentry.js` with the coin name defined in the config.

Once you've done that, you can test sentry is working by adding something like `throw new Error('Hello, sentry');` in the mainscreen constructor.
