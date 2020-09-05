// Copyright (C) 2018, Zpalmtree
// Copyright (C) 2019, 2ACoin Developers
// Copyright (C) 2020, Mangocoin Developers
//
// Please see the included LICENSE file for more information.

import { Platform } from 'react-native';

import { MixinLimit, MixinLimits, Daemon } from 'turtlecoin-wallet-backend';

import {
    derivePublicKey, generateKeyDerivation, generateRingSignatures,
    deriveSecretKey, generateKeyImage,
} from './NativeCode';

const Config = new function() {
    /**
     * If you can't figure this one out, I don't have high hopes
     */
    this.coinName = 'Mangocoin';

    /**
     * Prefix for URI encoded addresses
     */
    this.uriPrefix = 'mangocoin://';

    /**
     * How often to save the wallet, in milliseconds
     */
    this.walletSaveFrequency = 60 * 1000;

    /**
     * The amount of decimal places your coin has, e.g. 2ACoin has eight
     * decimals
     */
    this.decimalPlaces = 8;

    /**
     * The address prefix your coin uses - you can find this in CryptoNoteConfig.h.
     * In 2ACoin, this converts to guns
     */
    this.addressPrefix = 120;

    /**
     * Request timeout for daemon operations in milliseconds
     */
    this.requestTimeout = 10 * 1000;

    /**
     * The block time of your coin, in seconds
     */
    this.blockTargetTime = 120;

    /**
     * How often to process blocks, in millseconds
     */
    this.syncThreadInterval = 4;

    /**
     * How often to update the daemon info, in milliseconds
     */
    this.daemonUpdateInterval = 10 * 1000;

    /**
     * How often to check on locked transactions
     */
    this.lockedTransactionsCheckInterval = 10 * 3000;

    /**
     * The amount of blocks to process per 'tick' of the mainloop. Note: too
     * high a value will cause the event loop to be blocked, and your interaction
     * to be laggy.
     */
    this.blocksPerTick = 1;

    /**
     * Your coins 'ticker', generally used to refer to the coin, i.e. 123 TRTL
     */
    this.ticker = 'MNG';

    /**
     * Most people haven't mined any blocks, so lets not waste time scanning
     * them
     */
    this.scanCoinbaseTransactions = true;

    /**
     * The minimum fee allowed for transactions, in ATOMIC units
     */
    this.minimumFee = 1000000;

    /**
     * Mapping of height to mixin maximum and mixin minimum
     */
    this.mixinLimits = new MixinLimits([
        /* Height: 0, minMixin: 0, maxMixin: 100, defaultMixin: 3 - V1 */
        new MixinLimit(4000, 0, 100, 100),

        /* Height: 250, minMixin: 0, maxMixin: 7, defaultMixin: 7 - V2*/
        new MixinLimit(5000, 0, 7, 7),

        /* Height: 100,000, minMixin: 0, maxMixin: 3, defaultMixin: 3 */
        new MixinLimit(100000, 0, 3, 0),
    ], 3 /* Default mixin of 3 before block 250 */),

    /**
     * The length of a standard address for your coin
     */
    this.standardAddressLength = 95;

    /**
     * The length of an integrated address for your coin - It's the same as
     * a normal address, but there is a paymentID included in there - since
     * payment ID's are 64 chars, and base58 encoding is done by encoding
     * chunks of 8 chars at once into blocks of 11 chars, we can calculate
     * this automatically
     */
    this.integratedAddressLength = 95 + ((64 * 11) / 8);

    /**
     * Use our native func instead of JS slowness
     */
    this.derivePublicKey = Platform.OS === 'ios' ? undefined : derivePublicKey;

    /**
     * Use our native func instead of JS slowness
     */
    this.generateKeyDerivation = Platform.OS === 'ios' ? undefined : generateKeyDerivation;

    /**
     * Use our native func instead of JS slowness
     */
    this.generateRingSignatures = Platform.OS === 'ios' ? undefined : generateRingSignatures;

    /**
     * Use our native func instead of JS slowness
     */
    this.deriveSecretKey = Platform.OS === 'ios' ? undefined : deriveSecretKey;

    /**
     * Use our native func instead of JS slowness
     */
    this.generateKeyImage = Platform.OS === 'ios' ? undefined : generateKeyImage;

    /**
     * Memory to use for storing downloaded blocks - 3MB
     */
    this.blockStoreMemoryLimit = 1024 * 1024 * 3;

    /**
     * Amount of blocks to request from the daemon at once
     */
    this.blocksPerDaemonRequest = 100;

    /**
     * Unix timestamp of the time your chain was launched.
     *
     * Note - you may want to manually adjust this. Take the current timestamp,
     * take away the launch timestamp, divide by block time, and that value
     * should be equal to your current block count. If it's significantly different,
     * you can offset your timestamp to fix the discrepancy
     */
    this.chainLaunchTimestamp = new Date(1000 * 1562956646);

    /**
     * Fee to take on all transactions, in percentage
     */
    this.devFeePercentage = 0.5;

    /**
     * Address to send dev fee to
     */
    this.devFeeAddress = 'MEpLh1LswBqihtwVB7VuYAQP7E39SYSwVQwFVyAjpGd6fdALVvZk74YTq5jTo4DNnTdkw2wcWCzJ2EtVJ9k9DhioBWQ7GGq';

    /**
     * Base url for price API
     *
     * The program *should* fail gracefully if your coin is not supported, or
     * you just set this to an empty string. If you have another API you want
     * it to support, you're going to have to modify the code in Currency.js.
     */
    this.priceApiLink = 'https://api.coingecko.com/api/v3/simple/price';

    /**
     * Default daemon to use. Can either be a BlockchainCacheApi(baseURL, SSL),
     * or a ConventionalDaemon(url, port).
     */
    this.defaultDaemon = new Daemon('116.203.140.242', 11898);

    /**
     * A link to where a bug can be reported for your wallet. Please update
     * this if you are forking, so we don't get reported bugs for your wallet...
     *
     */
    this.repoLink = 'https://github.com/mangocoinproject/mangocoin-mobile-wallet/issues';

    /**
     * This only controls the name in the settings screen.
     */
    this.appName = 'MangoVault';

    /**
     * Slogan phrase during wallet CreateScreen
     */
    this.sloganCreateScreen = 'Start storing MNG today!';

    /**
     * Displayed in the settings screen
     */
    this.appVersion = 'v0.1.1.0';

    /**
     * Base URL for us to chuck a hash on the end, and find a transaction
     */
    this.explorerBaseURL = 'http://explorer.mangocoin.online/?hash=';

    /**
     * A link to your app on the Apple app store. Currently blank because we
     * haven't released for iOS yet...
     */
    this.appStoreLink = 'https://github.com/mangocoinproject/mangocoin-mobile-wallet/releases';

    /**
     * A link to your app on the google play store
     */
    this.googlePlayLink = 'https://play.google.com/store/apps/details?id=com.mangovault';
};

module.exports = Config;
