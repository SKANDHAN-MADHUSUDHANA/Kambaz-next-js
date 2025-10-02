import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2>
      <hr />
      <div id="wd-dashboard-courses">
        <Row className="g-4">
          {/* React */}
          <Col xs={12} md={6} lg={4} xl={3} className="wd-dashboard-course">
            <Card style={{ width: "100%" }}>
              <Link
                href="/Courses/1234"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Image
                  className="card-img-top"
                  src="/images/reactjs.jpg"
                  width={300}
                  height={160}
                  alt="React"
                  style={{ objectFit: "cover", width: "100%" }}
                />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS1234 React JS
                  </CardTitle>
                  <CardText
                    className="wd-dashboard-course-description overflow-hidden"
                    style={{ height: "100px" }}
                  >
                    Full Stack software developer
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          {/* JavaScript */}
          <Col xs={12} md={6} lg={4} xl={3} className="wd-dashboard-course">
            <Card style={{ width: "100%" }}>
              <Link
                href="/Courses/1432"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Image
                  className="card-img-top"
                  src="/images/javascript.png"
                  width={300}
                  height={160}
                  alt="JavaScript"
                  style={{ objectFit: "cover", width: "100%" }}
                />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS1432 JS
                  </CardTitle>
                  <CardText
                    className="wd-dashboard-course-description overflow-hidden"
                    style={{ height: "100px" }}
                  >
                    Full Stack software developer
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          {/* Java */}
          <Col xs={12} md={6} lg={4} xl={3} className="wd-dashboard-course">
            <Card style={{ width: "100%" }}>
              <Link
                href="/Courses/2900"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Image
                  className="card-img-top"
                  src="/images/java.png"
                  width={300}
                  height={160}
                  alt="Java"
                  style={{ objectFit: "cover", width: "100%" }}
                />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS2900 JAVA
                  </CardTitle>
                  <CardText
                    className="wd-dashboard-course-description overflow-hidden"
                    style={{ height: "100px" }}
                  >
                    Full Stack software developer
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          {/* AWS */}
          <Col xs={12} md={6} lg={4} xl={3} className="wd-dashboard-course">
            <Card style={{ width: "100%" }}>
              <Link
                href="/Courses/7583"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Image
                  className="card-img-top"
                  src="/images/amazon.png"
                  width={300}
                  height={160}
                  alt="AWS"
                  style={{ objectFit: "cover", width: "100%" }}
                />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS7583 AWS
                  </CardTitle>
                  <CardText
                    className="wd-dashboard-course-description overflow-hidden"
                    style={{ height: "100px" }}
                  >
                    Full Stack software developer
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          {/* Next.js */}
          <Col xs={12} md={6} lg={4} xl={3} className="wd-dashboard-course">
            <Card style={{ width: "100%" }}>
              <Link
                href="/Courses/9823"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Image
                  className="card-img-top"
                  src="/images/next.png"
                  width={300}
                  height={160}
                  alt="Next.js"
                  style={{ objectFit: "cover", width: "100%" }}
                />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS9823 Next.js
                  </CardTitle>
                  <CardText
                    className="wd-dashboard-course-description overflow-hidden"
                    style={{ height: "100px" }}
                  >
                    Full Stack software developer
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          {/* Salesforce */}
          <Col xs={12} md={6} lg={4} xl={3} className="wd-dashboard-course">
            <Card style={{ width: "100%" }}>
              <Link
                href="/Courses/1058"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Image
                  className="card-img-top"
                  src="/images/salesforce.png"
                  width={300}
                  height={160}
                  alt="Salesforce"
                  style={{ objectFit: "cover", width: "100%" }}
                />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS1058 Salesforce
                  </CardTitle>
                  <CardText
                    className="wd-dashboard-course-description overflow-hidden"
                    style={{ height: "100px" }}
                  >
                    Full Stack software developer
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          {/* Kubernetes */}
          <Col xs={12} md={6} lg={4} xl={3} className="wd-dashboard-course">
            <Card style={{ width: "100%" }}>
              <Link
                href="/Courses/1059"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Image
                  className="card-img-top"
                  src="/images/kubernetes.png"
                  width={300}
                  height={160}
                  alt="Kubernetes"
                  style={{ objectFit: "cover", width: "100%" }}
                />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS1059 Kubernetes
                  </CardTitle>
                  <CardText
                    className="wd-dashboard-course-description overflow-hidden"
                    style={{ height: "100px" }}
                  >
                    Full Stack software developer
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
