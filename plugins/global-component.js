import Vue from 'vue';

// 왜 import 는 for문으로 돌릴 수 없는거지?

// 분자 컴포넌트 import
import ContentHeader from '@/components/pageContent/ContentHeader';
import SidebarList from '@/components/pageContent/SidebarList';
import Dropdown from '@/components/pageContent/Dropdown';
import TextBlocks from '@/components/pageContent/TextBlocks';
import ThumnailBlocks from '@/components/pageContent/ThumnailBlocks';
import Document from '@/components/pageContent/Document';



// 유기체 컴포넌트 import
import Modal from '@/components/pageContent/Modal/Modal';
import PageHeader from '@/components/pageContent/PageHeader/PageHeader';
import PageContent from '@/components/pageContent/PageContent/PageContent';
import SubSidebar from '@/components/pageContent/SubSidebar/SubSidebar';

Vue.component('ContentHeader', ContentHeader);
Vue.component('SidebarList', SidebarList);
Vue.component('Dropdown', Dropdown);
Vue.component('TextBlocks', TextBlocks);
Vue.component('ThumnailBlocks', ThumnailBlocks);
Vue.component('Document', Document);

Vue.component('Modal', Modal);
Vue.component('PageHeader', PageHeader);
Vue.component('PageContent', PageContent);
Vue.component('SubSidebar', SubSidebar);







