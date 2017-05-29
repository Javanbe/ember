import Ember from 'ember';

export default Ember.Route.extend({
    model(){
	return[{userName:'admin',
                number:'00000000000000',
                balance:0,
                abalance:0,
                currence:'$'
	}]
    }
});
