<template>
    <TDropdown
        v-bind="$attrs"
        :classes="{
            button: 'block px-4 py-1.5 text-sm active:bg-ui-gray-900 text-ui-gray-100 transition duration-100 ease-in-out bg-ui-gray-800 hover:bg-ui-gray-900 focus:outline-none focus:ring-0 disabled:opacity-50 disabled:cursor-not-allowed',
            wrapper: 'inline-flex flex-col',
            dropdownWrapper: 'relative z-30 bg-ui-gray-700',
            dropdown:
                'highlight origin-top-left absolute left-0 top-1 left-1 w-56 shadow bg-ui-gray-700 overflow-hidden rounded-lg ring-1 ring-ui-gray-800',
            enterClass: 'opacity-0 scale-95',
            enterActiveClass: 'transition transform ease-out duration-100',
            enterToClass: 'opacity-100 scale-100',
            leaveClass: 'opacity-100 scale-100',
            leaveActiveClass: 'transition transform ease-in duration-75',
            leaveToClass: 'opacity-0 scale-95',
        }"
    >
        <div
            dusk="dropdown-file"
            slot-scope="{ hide, blurHandler }"
            class="py-2 shadow-lg space-y-1"
        >
            <template v-for="(option, index) in options">
                <div v-if="option.separator" class="h-px bg-ui-gray-800 mx-2" :key="index"></div>

                <a
                    v-else
                    href="#"
                    :key="option.name"
                    @blur="blurHandler"
                    @click.prevent="() => option.click() && hide()"
                    class="block p-2 text-xs transition duration-150 ease-in-out mx-2 font-medium text-ui-gray-100 rounded-md hover:bg-ui-gray-900 focus:outline-none focus:ring-0 focus:bg-ui-gray-900"
                >
                    {{ option.title }}
                </a>
            </template>
        </div>
    </TDropdown>
</template>

<script>
export default {
    props: { options: Array },
};
</script>
