import VillagePage from '../components/VillagePage';
import type { VillageData } from '../components/VillagePage';

const data: VillageData = {
  village: 'Quenington',
  slug: 'quenington-roof-repairs',
  postcode: 'GL7 5',
  titleTag: 'Roof Repairs in Quenington (GL7)',
  metaDesc: 'Roof repair request service for Quenington homeowners, GL7. Matched with a suitable local roofing professional — no shared leads, no obligation, GL7 local focus.',
  ogDesc: 'Submit a roof repair request in Quenington, GL7. Matched with a local roofing professional. No shared leads, no obligation.',
  searchTerms: [
    'Roof repairs in Quenington GL7',
    'Local roofer Quenington',
    'Roof leak repair Quenington',
    'Lead valley repair Quenington GL7'
  ],
  h1: 'Roof Repairs & Roofing Requests in Quenington (GL7)',
  urgencyText: 'Roof problem in Quenington? Submit your request and be matched with a suitable local roofing professional covering GL7 — no shared leads, no obligation.',

  intro: `
    <p>Quenington is a small village in the GL7 postcode area, sitting in the Coln valley between Fairford and Coln St Aldwyns. The village is historically associated with the Knights Hospitaller, whose medieval gatehouse still stands, and it contains a notable collection of Norman and medieval architecture alongside traditional Cotswold stone residential properties. Like many of the smaller GL7 villages, Quenington's housing stock is predominantly older and built from local limestone — a material that demands careful, specialist roofing attention.</p>
    <p>The roofing challenges faced by Quenington homeowners reflect the age and construction type of local properties. Chimney stacks in the older parts of the village are commonly in need of repointing or flashing repairs, and the transition between roof planes — valleys, hips and abutments — are consistent sources of water ingress on period properties. The Coln valley position also creates specific moisture conditions: river mist, high autumn humidity, and persistent damp mean that even small defects in roof integrity can lead to significant internal moisture problems if left unaddressed.</p>
    <p>GL7 Roof Quotes connects Quenington homeowners with roofing professionals who cover this part of the GL7 area. We are a local request platform — not a contractor. Submitting a request takes a few minutes and your details are never shared publicly or sent to multiple contractors.</p>
  `,

  commonIssues: [
    { issue: 'Chimney repointing and flaunching', detail: 'Quenington\'s older properties have original chimney stacks where lime mortar joints and cement flaunching deteriorate and allow water into the stack.' },
    { issue: 'Lead valley repairs', detail: 'Period properties in the Coln valley have complex roof profiles where lead valley flashings fail over time and admit water at the junction between roof pitches.' },
    { issue: 'Ridge tile re-bedding', detail: 'Wind-exposed ridges on GL7 stone properties lose their mortar bedding, leaving ridge tiles loose and at risk of falling — a safety hazard requiring urgent attention.' },
    { issue: 'Slate and stone tile repairs', detail: 'Older roofs in Quenington may have natural slate or Cotswold stone tile coverings where individual units have cracked or delaminated and require specialist replacement.' },
    { issue: 'Parapet and wall coping leaks', detail: 'Where roofs adjoin raised parapet walls — common on period GL7 farmhouses — coping stones and adjacent flashings are frequent water entry points.' },
    { issue: 'Flat roof maintenance on outbuildings', detail: 'Converted barns and agricultural outbuildings in and around Quenington often have GRP or felt flat roof sections that require regular professional inspection.' },
  ],

  localContext: `
    <p>Quenington's position in the Coln valley gives it a character similar to other Leach and Coln valley villages — sheltered from the worst of the westerly winds, but subject to the persistent moisture associated with river valley locations. The Coln is a chalk stream and its valley floor remains wet through much of the year, creating a microclimate where damp is a constant background presence. Properties with any weakness in their roof envelope will feel this more acutely than similar properties in drier upland positions.</p>
    <p>Many of Quenington's older residential properties are constructed with thick Cotswold limestone walls that provide good thermal mass but also absorb and retain significant quantities of moisture. This means that diagnosing the source of internal damp in a Quenington stone cottage can be genuinely complex — moisture may be rising from ground level, penetrating through walls, or entering via roof defects, and sometimes all three simultaneously. A roofing professional who understands traditional Cotswold construction is best placed to distinguish between roof-related and other sources of moisture.</p>
    <p>The village's historic fabric also means that listed building considerations are relevant for some properties. Repairs to listed structures should use conservation-appropriate materials — lime mortar rather than cement, natural slate or matching stone for tile replacement, traditional lead work for flashings. Our matching process takes this into account when connecting Quenington requests with suitable professionals.</p>
  `,

  midContent: `
    <p>When you submit a roof repair request for your Quenington property through GL7 Roof Quotes, the process is straightforward. You describe the issue you have noticed — water staining on ceilings, visible damage to tiles or ridge, damp patches near chimney breasts — and provide your postcode and contact details. Uploading a photograph where safely accessible is helpful but not required.</p>
    <p>We review your request and connect you with a roofing professional who covers the Quenington and Coln valley area within GL7. They will reach out to you directly to discuss the problem and arrange an inspection at a convenient time. Your details go to one professional only — there is no shared lead pool, no call centre, and no obligation to proceed following any inspection or quotation.</p>
    <p>Quenington is within easy reach of Fairford, Hatherop and Coln St Aldwyns — all of which we cover within the same GL7 request network. If you have properties or outbuildings across multiple locations in this area, each can be submitted as a separate request through our platform.</p>
  `,

  closingContent: `
    <p>For Quenington homeowners, GL7 Roof Quotes offers a calm, structured alternative to searching for a local roofer through general online directories. We focus exclusively on the GL7 area, which means the professionals we connect you with understand local property types, local weather patterns, and the conservation requirements that apply to older GL7 buildings.</p>
    <p>Your request details are never shared publicly. There is no obligation to proceed after an inspection or quotation. Whether you are dealing with an urgent leak following a storm or planning ahead for maintenance before winter, submitting a roof repair request is a practical and pressure-free first step.</p>
    <p>Quenington sits between Fairford, Hatherop and Coln St Aldwyns — all part of the GL7 village cluster we cover. Each of these villages has its own page on our platform if you need information about roofing issues specific to those locations.</p>
  `,

  nearby: [
    { name: 'Fairford', slug: 'fairford-roof-repairs' },
    { name: 'Hatherop', slug: 'hatherop-roof-repairs' },
    { name: 'Coln St Aldwyns', slug: 'coln-st-aldwyns-roof-repairs' },
  ],
};

export default function QueningtonRoofRepairs() {
  return <VillagePage data={data} />;
}
