import PropTypes from 'prop-types';
import css from '../Statistics/Statistics.module.css';

const Statistics = ({ title, data }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>

      <ul className={css.statlist}>
        {data.map(file => {
          return (
            <li
              key={file.id}
              className={css.item}
              style={{ backgroundColor: getRandomColor() }}
            >
              <span className={css.label}>{file.label}</span>
              <span className={css.percentage}>{file.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;

const getRandomColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
};
