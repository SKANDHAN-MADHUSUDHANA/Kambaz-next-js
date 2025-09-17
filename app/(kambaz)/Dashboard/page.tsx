import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.jpg" width={200} height={150} alt="React"/>
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/1432" className="wd-dashboard-course-link">
            <Image src="/images/javascript.png" width={200} height={150} alt="React"/>
            <div>
              <h5> CS1432 JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/2900" className="wd-dashboard-course-link">
            <Image src="/images/java.png" width={200} height={150} alt="React"/>
            <div>
              <h5> CS2900 JAVA </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/7583" className="wd-dashboard-course-link">
            <Image src="/images/amazon.png" width={200} height={150} alt="React"/>
            <div>
              <h5> CS7583 AWS</h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/9823" className="wd-dashboard-course-link">
            <Image src="/images/next.png" width={200} height={150} alt="React"/>
            <div>
              <h5> CS9823 Next.js</h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/1058" className="wd-dashboard-course-link">
            <Image src="/images/salesforce.png" width={200} height={150} alt="React"/>
            <div>
              <h5> CS1058 Salesforce</h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/1059" className="wd-dashboard-course-link">
            <Image src="/images/kubernetes.png" width={200} height={150} alt="React"/>
            <div>
              <h5> CS1059 Kubernetes</h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
);}
