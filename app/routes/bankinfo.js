import Ember from 'ember';

export default Ember.Route.extend({
    model(){
	return [{nameBank:'SCB',number:'6223695897563215960',balance:0,currency:'$'},{nameBank:'ABC',number:'6223695897563215961',balance:0,currency:'$'},{nameBank:'ICBC',number:'6223695897563215962',balance:0,currency:'$'}];
    }
});
