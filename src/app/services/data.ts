import { ServiceTypeModel, ServiceModel } from '../models/models';
// tslint:disable-next-line: max-line-length
const SERVICE_DESC = `Written enquire painful to offices forming it. Then so does over sent dull. Likewise offended humour mrsfat trifling answered. On ye position greatest so desirous enable performance based.`;
const MORE = 'more description, more description, more description, more description, more description,';

export const TERMS_OF_CONDITIONS = `These legal agreements are very important for defining terms, policies, and
acceptable uses of your website or app. However, these agreements are essentially useless if you do not
get
people to legally agree to be
bound by their terms. This is due hugely in part to increased requirements for consent put forth by the
GDPR.

While there isn't only one way to get people to agree to your terms, there's a favored method to ensure
that
your legal agreements are able to be upheld in the event of a legal dispute or if other issues arise.

This favored method of obtaining consent from users over the terms of your legal agreement is known as
clickwrap.
These legal agreements are very important for defining terms, policies, and acceptable uses of your
website
or app. However, these agreements are essentially useless if you do not get people to legally agree to be
bound by their terms. This is due hugely in part to increased requirements for consent put forth by the
GDPR.

While there isn't only one way to get people to agree to your terms, there's a favored method to ensure
that
your legal agreements are able to be upheld in the event of a legal dispute or if other issues arise.

This favored method of obtaining consent from users over the terms of your legal agreement is known as
clickwrap`;
export const SERVICE_TYPES = new Array<ServiceTypeModel>();

for (let i = 0; i < 4; i++) {
  SERVICE_TYPES.push({
    id: i,
    title: 'Service Type ' + i,
    services: []
  } as ServiceTypeModel);
}

SERVICE_TYPES.forEach(st => {
  for (let i = 0; i < 5; i++) {
    st.services.push({
      id: i,
      title: `Service ${i}`,
      description: SERVICE_DESC,
      more: MORE
    } as ServiceModel);
  }
});
