import { Container, Card, Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { obtainRecipeAPI } from "../../helpers/queries";

const recipe = () => {
  const [recipe, setRecipe] = useState([]);
  useEffect(() => {
    obtainRecipe();
  }, []);
  const { id } = useParams();
  const obtainRecipe = async () => {
    const answer = await obtainRecipeAPI(id);
    if (answer.status === 200) {
      const data = await answer.json();
      setRecipe(data);
    }
  };
  return (
    <Container className="myMain py-5">
      <Card>
        <Row>
          <Col md={6}>
            <Card.Img
              src={recipe.image}
              alt="Representative image"
            />
          </Col>
          <Col md={6}>
            <Card.Body>
              <Card.Title>{recipe.plate}</Card.Title>
              <hr />
              <Card.Text>
                <b>Ingredients: </b>{recipe.ingredients}
                <br />
                <br />
                {recipe.recipe}
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default recipe;
