/*--------------- Common Components ------------------*/
import Header from './common/Header/Header';
import Footer from './common/Footer/Footer';
import Sidebar from './common/Sidebar/Sidebar';
import ChatSidebar from './common/ChatSidebar/ChatSidebar';
import Stylebar from './common/Stylebar/Stylebar';
import StyleSettings from './common/StyleSettings/StyleSettings';
import Favcontacts from './common/Chatbar/Favcontacts';
import Allcontacts from './common/Chatbar/Allcontacts';
import Chatgroups from './common/Chatbar/Chatgroups';
import Notifications from './common/Notifications/Notifications';
import Messages from './common/Messages/Messages';
import Mailbox from './common/Mailbox/Mailbox';


/*---------------  Admin Components ------------------*/
import Professorslist from './admin/Professorslist/Professorslist';
import Studentslist from './admin/Studentslist/Studentslist';
import Center from './admin/UniStaffslist/Center';
import Courseslist from './admin/Courseslist/Courseslist';
/*--------------- Unused Components ------------------*/
//import PanelHeader from './general/PanelHeader/PanelHeader';
//import Stats from './general/Stats/Stats';
//import Tasks from './general/Tasks/Tasks';
import Pt from './pt/Professorslist/Professorslist'
import St from './pt/Studentslist/Studentslist';
import Uni from './pt/UniStaffslist/UniStaffslist';
import Cour from './pt/Courseslist/Courseslist';
export {
    // Footer
    Footer,
    // Header
    Header,
    // PanelHeader
    //PanelHeader,
    // Sidebar
    Sidebar,
    // ChatSidebar
    ChatSidebar,
    Stylebar,
    // Stats
    //Stats,
    // Tasks
    //Tasks,
    // topbar messages
    Messages,
    // topbar notifications
    Notifications,
    // chatbar Favourite contacts
    Favcontacts,
    // chatbar All contacts
    Allcontacts,
    // chatbar Groups
    Chatgroups,
    Mailbox,
    StyleSettings,
    //admin
    Professorslist,
    Studentslist,
    Center,
    Courseslist,

    //pt
    Pt,
    St,
    Uni,
    Cour,
};
