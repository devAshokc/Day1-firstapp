import './App.css';
// import './index.css';
import Price from './Components/Price'
let data = [
  {
    plan: "Free",
    price: "0",
    user: "Single User",
    userEnabler: true,
    storage: "5GB storage",
    storageEnabler: true,
    projectsPublic: "Unlimited Public Projects",
    projectsPublicEnabler: true,
    community: "Community Access",
    CommunityEnabler: true,
    projectsPrivate: "Unlimited Private Projects",
    projectsPrivateEnabler: false,
    phoneSupport: "Dedicated phone support",
    phoneSupportEnabler: false,
    subdomain: "Free Subdomain",
    subdomainEnabler: false,
    status: "Monthly Status Reports",
    statusEnabler: false,

  },
  {
    plan: "Plus",
    price: "9",
    user: "5 Users",
    userEnabler: true,
    storage: "50GB storage",
    storageEnabler: true,
    projectsPublic: "Unlimited Public Projects",
    projectsPublicEnabler: true,
    community: "Community Access",
    CommunityEnabler: true,
    projectsPrivate: "Unlimited Private Projects",
    projectsPrivateEnabler: true,
    phoneSupport: "Dedicated phone support",
    phoneSupportEnabler: true,
    subdomain: "Free Subdomain",
    subdomainEnabler: true,
    status: "Monthly Status Reports",
    statusEnabler: false,

  },
  {
    plan: "Pro",
    price: "49",
    user: "Unlimited Users",
    userEnabler: true,
    storage: "150GB storage",
    storageEnabler: true,
    projectsPublic: "Unlimited Public Projects",
    projectsPublicEnabler: true,
    community: "Community Access",
    CommunityEnabler: true,
    projectsPrivate: "Unlimited Private Projects",
    projectsPrivateEnabler: true,
    phoneSupport: "Dedicated phone support",
    phoneSupportEnabler: true,
    subdomain: "Free Subdomain",
    subdomainEnabler: true,
    status: "Monthly Status Reports",
    statusEnabler: true,

  },
]

function App() {
  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          {
            data.map((n, i) => {
              return <Price data={n} key={i} />
            })
          }
        </div>
      </div>
    </section>
  );
}

export default App;
