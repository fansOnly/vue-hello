const Home  = () => import('../views/Home/index.vue')
const Foo  = () => import('../views/Foo/index.vue')
const Bar = () => import('../views/Bar/index.vue')
const NotFound = () => import('../components/notFound/404.vue')

const routes = [
	{
		path: '/',
		components: Home
	},
	{
		path: '/foo',
		components: Foo
	},
	{
		path: '/bar',
		components: Bar
	},
	{
		path: '*',
		components: NotFound
	}
]

export default routes;
