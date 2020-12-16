import React from "react";
import { Link } from "react-router-dom";

import {
  Button,
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

const SignUp = () => (
  <React.Fragment>
    <div className="text-center mt-2 mb-4">
      <h1 className="h2">Get started</h1>
      <p className="lead">
        Sign up to view your Actuarial Tech plans.
      </p>
    </div>

    <Card>
      <CardBody>
        <div className="m-sm-1">
          <Form>

            <FormGroup>
              <Label>Email</Label>
              <Input
                bsSize="lg"
                type="email"
                name="email"
                placeholder="Enter your email"
              />
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Input
                bsSize="lg"
                type="password"
                name="password"
                placeholder="Enter password"
              />
            </FormGroup>
            <div className="text-center mt-3">
              <Link to="/plans/Overview">
                <Button color="primary" size="lg">
                  Sign up
                </Button>
              </Link>
            </div>
          </Form>
        </div>
      </CardBody>
    </Card>
  </React.Fragment>
);

export default SignUp;
