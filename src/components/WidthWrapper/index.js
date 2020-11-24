import './index.scss'

function WidthWrapper({
  children,
  className,
  as: Component = 'div',
  ...props
}) {
  return (
    <Component
      className={`WidthWrapper${className ? ` ${className}` : ''}`}
      {...props}
    >
      {children}
    </Component>
  )
}

export default WidthWrapper
