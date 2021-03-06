const PropTypes = require('prop-types');
/**
 * A component that renders a single SVG icon.
 */

const React = require('react');
const ReactDOM = require('react-dom');

const Iconography = require('./iconography');

class SvgIcon extends React.Component {
    static propTypes = {
        color: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    };

    componentDidMount() {
        this._addFillRule();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.name !== this.props.name) {
            this._addFillRule();
        }
    }

    _addFillRule = () => {
        // TODO(kevinb) remove this when we upgrade to React 15.
        const node = ReactDOM.findDOMNode(this);
        if (node instanceof SVGElement) {
            const firstGroup = node.querySelector('g');
            firstGroup.setAttributeNS(null, 'fill-rule', 'evenodd');
        }
    };

    render() {
        const {color, name} = this.props;

        const SvgForName = Iconography[name];
        return <SvgForName color={color} />;
    }
}

module.exports = SvgIcon;
