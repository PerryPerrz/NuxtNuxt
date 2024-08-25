import ModalContent from '../components/ModalContent.vue';
import { describe, test, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

describe('ModalContent', () => {
    test('ModalContent is defined', () => {
        expect(ModalContent).toBeDefined();
    });
});

describe('ModalContent functions', () => {
    const wrapper = mount(ModalContent);

    it('should render correctly', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('should render correctly bis', () => {
        expect(wrapper.html()).toContain('Close');
    })
});

describe('ModalContent props', () => {
    const wrapper = mount(ModalContent, {
        props: {
            title: 'Test title',
            content: 'Test content'
        }
    });

    it('should render correctly', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('should render correctly bis', () => {
        expect(wrapper.html()).toContain('Test title');
        expect(wrapper.html()).toContain('Test content');
    })
})

describe('ModalContent emits', () => {
    const wrapper = mount(ModalContent);

    it('should emit close event', async () => {
        await wrapper.find('[data-type="close"]').trigger('click');
        expect(wrapper.emitted()).toHaveProperty('close');
    })
})

