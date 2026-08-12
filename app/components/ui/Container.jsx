const Container = ({ children, className = '', as: Tag = 'div' }) => {
  return <Tag className={`section-container ${className}`}>{children}</Tag>;
};

export default Container;
