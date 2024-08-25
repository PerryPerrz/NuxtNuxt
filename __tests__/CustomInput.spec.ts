import CustomInput from '../components/CustomInput.vue';
import { describe, test, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

describe('CustomInput', () => {
    test('should render input', () => {
        const wrapper = mount(CustomInput);
        expect(wrapper.find('input').exists()).toBe(true);
    });

test('should render input with value', () => {
        const value = 'Hello';
        const wrapper = mount(CustomInput, {
        props: {
            value
        }
        });
        expect(wrapper.find('input').element.value).toBe(value);
    });

    test('should emit input event', async () => {
        const wrapper = mount(CustomInput);
        await wrapper.find('input').setValue('Hello');
        expect(wrapper.emitted('input')).toBeTruthy();
    });
});