import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

Vue.use(VueRouter)

/* Guest Component */
const Login = () => import('../components/Login.vue' /* webpackChunkName: "resource/js/components/login" */)
const Register = () => import('../components/Register.vue' /* webpackChunkName: "resource/js/components/register" */)
/* Guest Component */

/* Layouts */
const DashboardLayout = () => import('../components/Layouts/Dashboard.vue' /* webpackChunkName: "resource/js/components/layouts/dashboard" */)
/* Layouts */

/* Authenticated Component */
const Dashboard = () => import('../components/Dashboard.vue' /* webpackChunkName: "resource/js/components/dashboard" */);
const CreatePoll = () => import('../components/Poll/CreatePoll.vue');
const PollMeetingTimes = () => import('../components/Poll/PollMeetingTImes');
/* Authenticated Component */


const Routes = [
    {
        name:"login",
        path:"/login",
        component:Login,
        meta:{
            middleware:"guest",
            title:`Login`
        }
    },
    {
        name:"register",
        path:"/register",
        component:Register,
        meta:{
            middleware:"guest",
            title:`Register`
        }
    },
    {
        path:"/dashboard",
        component:DashboardLayout,
        meta:{
            middleware:"auth"
        },
        children:[
            {
                name:"dashboard",
                path: '/dashboard',
                component: Dashboard,
                meta:{
                    title:`Dashboard`
                }
            },

            {
                name:"poll.create",
                path: '/poll/create-poll',
                component: CreatePoll,
                meta:{
                    title:`Create Poll`
                }
            },

            {
                name:"poll.meeting-times",
                path: '/poll/meeting-times',
                component: PollMeetingTimes,
                meta:{
                    title:`Poll Meeting Times`
                }
            },
        ]
    }
]

var router  = new VueRouter({
    mode: 'history',
    routes: Routes
})

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} - ${process.env.MIX_APP_NAME}`
    if(to.meta.middleware=="guest"){
        if(store.state.auth.authenticated){
            next({name:"dashboard"})
        }
        next()
    }else{
        if(store.state.auth.authenticated){
            next()
        }else{
            next({name:"login"})
        }
    }
})

export default router