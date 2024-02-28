import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
const CardRecipe = ({ recipe }) => {
  return (
    <div>
      <Card>
        <div className="py-2 row justify-content-evenly">
          <div className="col-md-3 col-xl-2 align-self-center">
            <Card.Img src={recipe.image} alt="Representative image" />
          </div>
          <div className="col-md-8 col-xl-9">
            <Card.Body>
              <Card.Title>{recipe.plate}</Card.Title>
              <hr/>
              <Card.Text>
                {recipe.description}
              </Card.Text>
            </Card.Body>
          </div>
        </div>
        <Card.Footer className="text-end">
          <Link className="btn btn-danger" to={"/recipe/" + recipe.id}>
            See recipe
          </Link>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default CardRecipe;
