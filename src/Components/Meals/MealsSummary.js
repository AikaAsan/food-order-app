import classes from './MealsSummary.module.css';

const MealsSummary = () => {
    return (
        <section className={classes.summary}>
            <h2>Delicious fruit bowls, Delivered To You</h2>
            <p>
                Choose your favorite fruit bowl from our broad selection of
                available fruits and vegetables and enjoy a healthy breakfast or
                brunch at home.
            </p>
            <p>
                All our bowls are made with high-quality ingredients,
                just-in-time and of course by experienced chefs!
            </p>
        </section>
    );
};

export default MealsSummary;
