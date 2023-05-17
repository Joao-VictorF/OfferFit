<script setup lang="ts">
import { ref, watch } from 'vue'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/vue'
import { CheckIcon, SelectorIcon } from '@heroicons/vue/solid'

const props = defineProps({
  selectedItem: {
    type: String,
    default: '',
  },
  labelPrefix: {
    type: String,
    default: '',
  },
  items: {
    type: Array<String>,
    default: [],
  },
})

const selection = ref<string>(props.selectedItem)

const emit = defineEmits<{
  // eslint-disable-next-line no-unused-vars
  (e: 'update-model-value', item: string): void
}>()

watch(selection, (value) => {
  emit('update-model-value', value)
})
</script>

<template>
  <Listbox
    v-model="selection"
    as="div"
  >
    <div class="mt-1 relative">
      <ListboxButton class="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-green-600 focus:border-green-600 sm:text-sm">
        <div class="flex gap-x-2">
          <span
            v-if="labelPrefix"
            class="font-bold truncate"
          >
            {{ labelPrefix }}
          </span>
          <span class=" truncate">{{ selection }}</span>
        </div>
        <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <SelectorIcon
            class="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </span>
      </ListboxButton>

      <transition
        leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ListboxOptions class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
          <ListboxOption
            v-for="(item, index) in items"
            v-slot="{ active, selected }"
            :key="`select-item-${index}`"
            :value="item"
            as="template"
          >
            <li :class="[active ? 'text-white bg-green-600' : 'text-gray-900', 'cursor-default select-none relative py-2 pl-3 pr-9']">
              <span :class="[selected ? 'font-semibold' : 'font-normal', 'block truncate']">
                {{ item }}
              </span>

              <span
                v-if="selected"
                :class="[active ? 'text-white' : 'text-green-600', 'absolute inset-y-0 right-0 flex items-center pr-4']"
              >
                <CheckIcon
                  class="h-5 w-5"
                  aria-hidden="true"
                />
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>
