import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

const testRoutes = FlowRouter.group({
  prefix: '/test',
  name: 'test',
});

FlowRouter.route('/', {
  name: 'Home_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Home_Page' });
  },
});

testRoutes.route('/foo', {
  name: 'Foo_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Foo_Page' });
  },
});

testRoutes.route('/foo/bar', {
  name: 'Bar_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Bar_Page' });
  },
});
