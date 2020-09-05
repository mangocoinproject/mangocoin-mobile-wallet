// Copyright (C) 2018, Zpalmtree
// Copyright (C) 2019, 2ACoin Developers
//
// Please see the included LICENSE file for more information.

export const Themes = {
    lightMode: {
        /**
         * Background colour for every component
         */
        backgroundColour: 'white',

        /**
         * The primary colour used by the wallet, for 2ACoin this is #3A444C
         */
        primaryColour: '#000000', // text

        /**
         * Colour for the background circles on the pin page
         */
        pinCodeBackgroundColour: '#9EBBD1',

        /**
         * Colour for the pin code numbers
         * Note that when you click them, a different theme is applied.
         */
        pinCodeForegroundColour: '#3A444C',

        /**
         * We chose to use a darker shade here. It is very rarely used.
         */
        secondaryColour: '#1B2023',

        /**
         * Terrible name, lol. This is used things which shouldn't pop out
         * much, like the 'TOTAL BALANCE' text.
         */
        notVeryVisibleColour: 'lightgray',

        /**
         * This is used for the same sort of things as notVeryVisibleColour,
         * but pops out a little more. Used for things like the $ balance value.
         */
        slightlyMoreVisibleColour: 'gray',

        /**
         * Colour for disabled things, like bottom buttons
         */
        disabledColour: '#DADEE0',

        /**
         * Colour for the address book icon background
         */
        iconColour: 'ghostwhite',

        /**
         * Filepath of the logo to use.
         */
        logo: require('../assets/img/logo.png'),

        qrCode: {
            /**
             * Your foreground colour needs to be a darkish colour, or the
             * code will not scan.
             */
            foregroundColour: 'gray',

            /**
             * Your background colour needs to be a lightish colour, or the
             * code will not scan.
             */
            backgroundColour: 'white',
        },
    },
    darkMode: {
        /**
         * Background colour for every component
         */
        backgroundColour: '#000000',

        /**
         * The primary colour used by the wallet, for 2ACoin this is #3A444C
         */
        primaryColour: '#ffffff',

        /**
         * Colour for the background circles on the pin page
         */
        pinCodeBackgroundColour: '#9EBBD1',

        /**
         * Colour for the pin code numbers
         * Note that when you click them, a different theme is applied.
         */
        pinCodeForegroundColour: '#3A444C',

        /**
         * We chose to use a darker shade here. It is very rarely used.
         */
        secondaryColour: '#1B2023',

        /**
         * Terrible name, lol. This is used things which shouldn't pop out
         * much, like the 'TOTAL BALANCE' text.
         */
        notVeryVisibleColour: 'gray',

        /**
         * This is used for the same sort of things as notVeryVisibleColour,
         * but pops out a little more. Used for things like the $ balance value.
         */
        slightlyMoreVisibleColour: 'lightgray',

        /**
         * Colour for disabled bottom buttons
         */
        disabledColour: '#23272A',

        /**
         * Colour for the address book icon background
         */
        iconColour: '#23272A',

        /**
         * Filepath of the logo to use.
         */
        logo: require('../assets/img/logo-white.png'),

        qrCode: {
            /**
             * Your foreground colour needs to be a darkish colour, or the
             * code will not scan.
             */
            foregroundColour: '#2C2F33',

            /**
             * Your background colour needs to be a lightish colour, or the
             * code will not scan.
             */
            backgroundColour: 'lightgray',
        },
    },
}
