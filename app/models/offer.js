import Model, {attr} from '@ember-data/model';
import ValidationEngine from 'ghost-admin/mixins/validation-engine';

export default Model.extend(ValidationEngine, {
    validationType: 'offer',

    name: attr('string'),
    code: attr('string'),
    cadence: attr('string'),
    tier: attr(),
    stripeCouponId: attr('string'),
    interval: attr('string'),
    currency: attr('string'),
    type: attr('string'),
    amount: attr('number'),
    duration: attr('string'),
    durationInMonths: attr('number'),
    displayTitle: attr('string'),
    displayDescription: attr('string'),
    createdAtUTC: attr('moment-utc'),
    updatedAtUTC: attr('moment-utc')
});