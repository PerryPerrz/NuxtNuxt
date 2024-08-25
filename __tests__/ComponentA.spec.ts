import ComponentA from '../components/ComponentA.vue';
import { describe, test, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

describe('ComponentA', () => {
    test('ComponentA is defined', () => {
        expect(ComponentA).toBeDefined();
    });
});

describe('ComponentA functions', () => {
    const wrapper = mount(ComponentA);

    it('should render correctly', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('should render correctly bis', () => {
        expect(wrapper.html()).toContain('Component A');
        expect(wrapper.html()).toContain('KeepAlive');
        expect(wrapper.html()).toContain('Counter : 0');
    })

    it('should increment counter', async () => {
        /*
        const button = wrapper.find('button');
        await button.trigger('click');
        expect(wrapper.html()).toContain('Counter : 1');*/

        const btnIncrement = wrapper.find('[data-type="increment"]');
        await btnIncrement.trigger('click');
        expect(wrapper.html()).toContain('Counter : 1');
    });

    it('should decrement counter', async () => {
        const btnDecrement = wrapper.find('[data-type="decrement"]');
        await btnDecrement.trigger('click');
        expect(wrapper.html()).toContain('Counter : 0');
    });

    it('should decrement counter bis', async () => {
        const btnDecrement = wrapper.find('[data-type="decrement"]');
        await btnDecrement.trigger('click');
        expect(wrapper.html()).toContain('Counter : -1');
    });

    it('should increment counter bis', async () => {
        const btnIncrement = wrapper.find('[data-type="increment"]');
        await btnIncrement.trigger('click');
        expect(wrapper.html()).toContain('Counter : 0');
    });
});