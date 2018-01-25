import Vue from 'vue'
import MintUI from 'mint-ui'
import { Header } from 'mint-ui';
import { Tabbar, TabItem } from 'mint-ui';
import { TabContainer, TabContainerItem } from 'mint-ui';
import { Cell } from 'mint-ui';
import { Button } from 'mint-ui';
import { Navbar } from 'mint-ui';
import {Indicator, Loadmore} from 'mint-ui';
import { InfiniteScroll } from 'mint-ui';


Vue.component(Header.name, Header);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Cell.name, Cell);
Vue.component(Button.name, Button);
Vue.component(Navbar.name, Navbar);
Vue.component(Loadmore.name, Loadmore)
Vue.use(InfiniteScroll);
