import VillagePage from '../components/VillagePage';
import type { VillageData } from '../components/VillagePage';

const data: VillageData = {
  village: 'Hatherop',
  slug: 'hatherop-roof-repairs',
  postcode: 'GL7 3',
  titleTag: 'Roof Repairs in Hatherop (GL7)',
  metaDesc: 'Need a roofer in Hatherop, GL7? Submit a roof repair request and be matched with a suitable local roofing professional. No shared leads, no obligation, fast local response.',
  ogDesc: 'Roof repair request platform for Hatherop homeowners in GL7. Matched with suitable local professionals. No shared leads.',
  searchTerms: [
    'Roof repairs in Hatherop GL7',
    'Emergency roofer Hatherop',
    'Slate roof repair Hatherop',
    'Chimney repair Hatherop Cotswolds'
  ],
  h1: 'Roof Repair Requests in Hatherop (GL7)',
  urgencyText: 'Roof leak or damage in Hatherop? Submit your request and be matched with a suitable local roofer covering the GL7 area — no obligation, details never shared publicly.',

  intro: `
    <p>Hatherop is a small estate village in the GL7 postcode area, set in the Coln valley between Fairford and Coln St Aldwyns. The village is dominated by Hatherop Castle — now a private school — and the character of the settlement is shaped by its estate origins: well-maintained traditional stone cottages, a notable parish church, and properties that reflect the high standards of construction associated with historic estate management. This built quality, however, does not make roofs immune to the effects of time and weather.</p>
    <p>Hatherop homeowners seeking roof repair help are typically dealing with the well-established challenges of GL7 Cotswold stone properties: chimney stacks that need repointing or flashing replacement, valleys and hips where lead has fatigued, ridge tile mortar that has softened and eroded, and in some cases, natural slate roofs where individual slates have cracked or slipped. The estate history of the village means that some properties have been subject to periodic professional maintenance, but others — particularly cottages that have passed into private ownership — may have deferred maintenance that is beginning to manifest as active water ingress.</p>
    <p>GL7 Roof Quotes is a local roofing request platform — not a contractor. We connect Hatherop homeowners with experienced roofing professionals who cover the GL7 area and understand the demands of traditional Cotswold construction. Submitting a request is quick, no-obligation, and your details are never shared with multiple contractors.</p>
  `,

  commonIssues: [
    { issue: 'Natural slate repairs', detail: 'Some of Hatherop\'s older estate properties have natural slate roofs where slates have cracked, delaminated or slipped, requiring careful matching and replacement.' },
    { issue: 'Chimney flashing and repointing', detail: 'Well-maintained estate cottages can still develop chimney flashing failures as lead ages — a common source of water ingress on period GL7 properties.' },
    { issue: 'Ridge and hip mortar failure', detail: 'Even on properties with a history of maintenance, ridge and hip mortar bedding eventually softens and erodes, requiring re-bedding or flexible ridge system installation.' },
    { issue: 'Lead valley deterioration', detail: 'Complex multi-pitch roofs on older Hatherop properties concentrate water in valleys — areas where lead fatigue leads to small splits that admit water over time.' },
    { issue: 'Parapet gutter failures', detail: 'Some of Hatherop\'s larger period properties have internal parapet gutters that collect leaves and debris, causing overflow and water ingress into wall heads.' },
    { issue: 'Flat roof extensions', detail: 'More recently added single-storey extensions on Hatherop properties often have felt or GRP flat roofs that require periodic professional inspection and maintenance.' },
  ],

  localContext: `
    <p>Hatherop's position in the Coln valley creates roofing conditions similar to those experienced in neighbouring Quenington and Coln St Aldwyns. The valley floor remains damp through much of the year, with persistent mist in autumn and early winter contributing to elevated moisture levels in the atmosphere and in building fabric. This accelerates the deterioration of porous roofing materials — particularly lime mortar, natural slate, and timber battens — and means that minor defects left unattended will typically worsen more quickly than they would in a drier location.</p>
    <p>The estate history of Hatherop is relevant to roofing in a specific way: many of the village's properties were constructed or renovated to high standards during periods of active estate investment, and some retain original detailing — carved stone ridge tiles, decorative clay ridge crests, cast iron rainwater goods — that requires conservation-aware repair rather than straightforward like-for-like replacement. Where original roofing details are to be preserved, the roofing professional needs to have both the skills and the patience for careful, sympathetic work.</p>
    <p>GL7 Roof Quotes takes these factors into account in our matching process. When you submit a request from Hatherop, we aim to connect you with a professional who is not only capable but also appropriate for the specific demands of your property type. Estate village properties deserve the same quality of professional attention that went into their original construction.</p>
  `,

  midContent: `
    <p>To request roofing help in Hatherop, you complete a short request form describing the problem you have noticed — where on the property, what symptoms, when it started — and provide your postcode and contact details. Including a photograph taken safely from ground level is helpful and can significantly assist in matching your request to the right professional. The form works on mobile devices, which is convenient if you have just spotted a problem and want to log it immediately.</p>
    <p>We review your request and connect you with a local roofing professional who covers the Hatherop and Coln valley GL7 area. They will contact you directly — no shared lead pool, no automated calls, no obligation. The professional who reaches out to you is doing so because they cover your area and are available to help, not because they have paid to receive mass-distributed leads.</p>
    <p>Hatherop is within easy reach of Fairford, Quenington and Coln St Aldwyns — all of which form part of our GL7 village request network. If you are a landlord or property owner with interests across multiple GL7 villages, we can handle separate requests for each location.</p>
  `,

  closingContent: `
    <p>GL7 Roof Quotes is built around the principle that homeowners in smaller GL7 villages deserve the same quality of access to professional roofing help as those in larger market towns. Hatherop, like Southrop, Eastleach and Coln St Aldwyns, is a village where the right professional matters — and where the wrong contractor can cause as much damage as the original roof defect if they are unfamiliar with traditional Cotswold construction methods.</p>
    <p>By focusing exclusively on the GL7 area, we maintain a network of professionals who genuinely understand local property types and are committed to covering the full range of GL7 villages, including smaller communities like Hatherop. Your request goes to a professional who will actually come to the village — not one who will quote remotely without seeing the property.</p>
    <p>Hatherop sits between Fairford and Coln St Aldwyns in the GL7 Coln valley. We cover all of the nearby GL7 villages, and submitting separate requests for different properties in the area is straightforward through our platform.</p>
  `,

  nearby: [
    { name: 'Fairford', slug: 'fairford-roof-repairs' },
    { name: 'Quenington', slug: 'quenington-roof-repairs' },
    { name: 'Coln St Aldwyns', slug: 'coln-st-aldwyns-roof-repairs' },
  ],
};

export default function HatheropRoofRepairs() {
  return <VillagePage data={data} />;
}
