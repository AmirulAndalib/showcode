import { defineStore } from 'pinia';
import { useLocalStorage } from '@vueuse/core';
import themes from 'monaco-themes/themes/themelist.json';
import { pick, defaults as applyDefaults } from 'lodash';

export const defaults = {
    editorTabSize: 4,
    editorFontSize: 14,
    editorLineHeight: 1.5,
    editorFontLigatures: false,
    editorFontFamily: 'font-mono-lisa',
    editorLanguage: 'php',
    editorOrientation: 'left',
    editorLightTheme: 'vs-light',
    editorDarkTheme: 'merbivore',
    editorInitialValue: '<?php\n\n',

    previewFontSize: 16,
    previewLineHeight: 20,
    previewCodeBlurStrength: 1,
    previewFontFamily: 'font-mono-lisa',
    previewThemeName: 'github-dark',

    previewLockToWindow: false,
    previewLockToWindowPaddingX: 0,
    previewLockToWindowPaddingY: 0,

    exportPixelRatio: 3,

    stripIntialPhpTag: true,

    showSocialBadge: false,
    socialType: 'x',
    socialUsername: 'username',
    socialDisplayName: 'Display Name',
    socialPosition: 'bottom-center',
};

export default defineStore('preferences', {
    state: () => {
        const state = useLocalStorage('preferences', defaults);

        // Here we are enforcing the hydration of the default
        // preference values and also removing any keys
        // that may have been removed from an update.
        // prettier-ignore
        state.value = pick(
            applyDefaults(state.value, defaults), Object.keys(defaults)
        );

        return state;
    },

    getters: {
        editorThemes() {
            return {
                vs: 'Visual Studio',
                'vs-light': 'Visual Studio Light',
                'vs-dark': 'Visual Studio Dark',
                'hc-black': 'High Contrast Black',
                ...themes,
            };
        },
    },

    actions: {
        reset() {
            if (confirm('Reset all preferences?')) {
                this.$state = defaults;
            }
        },
    },
});
