'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));

var stripHtml = function stripHtml(element) {
  return element.innerHTML.replace(/<[^>]*>?/gm, '');
};

var parseStrDimensionToInt = function parseStrDimensionToInt(elementSize) {
  return parseInt(elementSize, 10);
};

var getOffset = function getOffset(el) {
  var rect = el.getBoundingClientRect();

  return {
    top: rect.top + document.body.scrollTop,
    left: rect.left + document.body.scrollLeft
  };
};

var index = function index(element) {
  var children = element.parentNode.childNodes;
  var num = 0;
  for (var i = 0; i < children.length; i++) {
    if (children[i] === element) return num;
    if (children[i].nodeType === 1) num++;
  }
  return -1;
};

var addClass = function addClass(element, className) {
  if (element.classList) element.classList.add(className);else element.className += ' ' + className;
};

var removeClass = function removeClass(element, className) {
  if (element.classList) element.classList.remove(className);else {
    element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  }
};

var hasClass = function hasClass(element, className) {
  if (element.classList) return element.classList.contains(className);else return new RegExp('(^| )' + className + '( |$)', 'gi').test(element.className);
};

var findFirstChildWithClassName = function findFirstChildWithClassName(element, className) {
  var matches = element.getElementsByClassName(className);

  if (matches && matches.length > 0) return matches[0];

  return null;
};

var findChildrenWithClassName = function findChildrenWithClassName(parentElement, className) {
  return parentElement.getElementsByClassName(className);
};

var getHiddenElementOuterHeight = function getHiddenElementOuterHeight(element) {
  element.style.visibility = 'hidden';
  element.style.display = 'block';
  var elementHeight = element.offsetHeight;
  element.style.display = 'none';
  element.style.visibility = 'visible';

  return elementHeight;
};

var getHiddenElementOuterWidth = function getHiddenElementOuterWidth(element) {
  element.style.visibility = 'hidden';
  element.style.display = 'block';
  var elementWidth = element.offsetWidth;
  element.style.display = 'none';
  element.style.visibility = 'visible';

  return elementWidth;
};

var getElementWidth = function getElementWidth(el) {
  var width = el.offsetWidth;
  var style = getComputedStyle(el);

  width -= parseFloat(style.paddingLeft) + parseFloat(style.paddingRight) + parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth);

  return width;
};

var getElementHeight = function getElementHeight(el) {
  var height = el.offsetHeight;
  var style = getComputedStyle(el);

  height -= parseFloat(style.paddingTop) + parseFloat(style.paddingBottom) + parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);

  return height;
};

var DomHelper = {
  stripHtml: stripHtml,
  parseStrDimensionToInt: parseStrDimensionToInt,
  getOffset: getOffset,
  index: index,
  addClass: addClass,
  removeClass: removeClass,
  hasClass: hasClass,
  getHiddenElementOuterHeight: getHiddenElementOuterHeight,
  getHiddenElementOuterWidth: getHiddenElementOuterWidth,
  findFirstChildWithClassName: findFirstChildWithClassName,
  findChildrenWithClassName: findChildrenWithClassName,
  getElementWidth: getElementWidth,
  getElementHeight: getElementHeight
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var DragMode = {
  REORDER: 'reorder',
  SWAP: 'swap'

  /**
   * Generate UuId
   * */
};
var index$1 = (function (Component) {
  var wrapper = function (_React$Component) {
    inherits(RTFixedDraggableColumn, _React$Component);
    createClass(RTFixedDraggableColumn, [{
      key: 'getWrappedInstance',
      value: function getWrappedInstance() {
        if (!this.wrappedInstance) console.warn('RTDraggableColumn - No wrapped instance');
        if (this.wrappedInstance.getWrappedInstance) return this.wrappedInstance.getWrappedInstance();else return this.wrappedInstance;
      }
    }]);

    function RTFixedDraggableColumn(props) {
      classCallCheck(this, RTFixedDraggableColumn);

      var _this = possibleConstructorReturn(this, (RTFixedDraggableColumn.__proto__ || Object.getPrototypeOf(RTFixedDraggableColumn)).call(this, props));

      _this.containerRef = React.createRef();
      _this.currentColumnOrder = [];

      _this.stopPropagation = function (e) {
        e.stopPropagation();
      };

      _this.dragged = null;
      _this.reorder = [];
      _this.state = {
        trigger: 0,
        firstLoad: true
      };
      return _this;
    }

    // helper methods


    createClass(RTFixedDraggableColumn, [{
      key: 'findParentHeader',
      value: function findParentHeader(element) {
        if (element.className.includes('rt-th')) {
          return element;
        } else {
          var parent = element.parentElement;
          while (!parent.className.includes('rt-th')) {
            parent = parent.parentElement;
            if (!parent) break;
          }
          return parent;
        }
      }
      // end helper methods

    }, {
      key: 'createDragEvents',
      value: function createDragEvents() {
        var _this2 = this;

        var headersCollection = DomHelper.findChildrenWithClassName(this.containerRef.current, 'draggable-header');

        // convert HTML collection to Javascript array
        var headers = [].concat(toConsumableArray(headersCollection));

        headers.forEach(function (header, i) {
          // only allow drag events on drag enabled columns
          if (header.className.includes('enable-drag')) {
            var headerParent = header.parentNode;

            var _props$draggableColum = _this2.props.draggableColumns.enableColumnWideDrag,
                enableColumnWideDrag = _props$draggableColum === undefined ? defaultProps.enableColumnWideDrag : _props$draggableColum;


            if (enableColumnWideDrag) {
              headerParent.setAttribute('draggable', true);
            } else {
              header.setAttribute('draggable', true);
              DomHelper.addClass(headerParent, 'transparent-border');
            }

            // ondragstart event
            headerParent.ondragstart = function (e) {
              e.stopPropagation();

              var _props$draggableColum2 = _this2.props.draggableColumns,
                  disableTableScroll = _props$draggableColum2.disableTableScroll,
                  _props$draggableColum3 = _props$draggableColum2.useDragImage,
                  useDragImage = _props$draggableColum3 === undefined ? defaultProps.useDragImage : _props$draggableColum3,
                  _props$draggableColum4 = _props$draggableColum2.dragImageClassName,
                  dragImageClassName = _props$draggableColum4 === undefined ? defaultProps.dragImageClassName : _props$draggableColum4;


              if (disableTableScroll) {
                var tableBody = DomHelper.findFirstChildWithClassName(_this2.containerRef.current, 'rt-table');

                if (tableBody) {
                  tableBody.style.overflow = 'hidden';
                }
              }

              // counter used as a workaround for dragleave event fired when hovering over a child element
              _this2.counter = 0;
              _this2.dragged = i;
              _this2.draggedName = DomHelper.stripHtml(headerParent);
              _this2.draggedColumn = _this2.findParentHeader(headerParent);

              _this2.iconWidth = DomHelper.getHiddenElementOuterWidth(_this2.reorderIndicatorUp);
              _this2.iconHeight = DomHelper.getHiddenElementOuterHeight(_this2.reorderIndicatorUp);

              e.dataTransfer.setData('text', 'b'); // Firefox requires this to make dragging possible

              if (useDragImage) {
                var crt = _this2.draggedColumn.cloneNode(true);

                crt.className = dragImageClassName;
                var columnWidth = DomHelper.getElementWidth(_this2.draggedColumn);
                var columnHeight = DomHelper.getElementHeight(_this2.draggedColumn);

                // calculate offset from draggedColumn element
                var xOffSet = Math.floor(columnWidth / 2);
                var yOffSet = Math.floor(columnHeight / 2);

                // max-width of 150px, otherwise it looks blurry in Chrome (Windows)
                if (columnWidth > 150) {
                  crt.style.width = '150px';
                  xOffSet = 150 / 2;
                }

                crt.style.position = 'absolute';
                crt.style.top = '-1000px';

                document.body.appendChild(crt);
                e.dataTransfer.effectAllowed = 'move';
                e.dataTransfer.setDragImage(crt, xOffSet, yOffSet);

                // set refernce to cloned Node
                _this2.clone = crt;
              }
            };

            // ondrag event
            headerParent.ondrag = function (e) {
              e.stopPropagation();
            };

            headerParent.ondragenter = function (e) {
              e.stopPropagation();
              e.preventDefault();
              _this2.counter++;

              if (DomHelper.stripHtml(e.target) !== _this2.draggedName) {
                var _props$draggableColum5 = _this2.props.draggableColumns,
                    _props$draggableColum6 = _props$draggableColum5.mode,
                    mode = _props$draggableColum6 === undefined ? defaultProps.mode : _props$draggableColum6,
                    _props$draggableColum7 = _props$draggableColum5.onDragEnterClassName,
                    onDragEnterClassName = _props$draggableColum7 === undefined ? defaultProps.onDragEnterClassName : _props$draggableColum7;


                if (mode === DragMode.SWAP && onDragEnterClassName) {
                  var dropHeader = _this2.findParentHeader(e.target);
                  DomHelper.addClass(dropHeader.firstChild, onDragEnterClassName);
                }
              }
            };

            // ondragover event
            headerParent.ondragover = function (e) {
              e.preventDefault();

              // prevent bug when using multiple react tables
              if (!_this2.draggedColumn) return;

              var _props$draggableColum8 = _this2.props.draggableColumns.mode,
                  mode = _props$draggableColum8 === undefined ? defaultProps.mode : _props$draggableColum8;


              var dropHeader = _this2.findParentHeader(e.target);

              // in reorder mode only
              if (mode === DragMode.REORDER) {
                if (DomHelper.stripHtml(e.target) !== _this2.draggedName) {
                  var containerOffset = DomHelper.getOffset(_this2.containerRef.current);
                  var dropHeaderOffset = DomHelper.getOffset(dropHeader);
                  var targetLeft = dropHeaderOffset.left - containerOffset.left;
                  var columnCenter = dropHeaderOffset.left + dropHeader.offsetWidth / 2;

                  var tableBodyBoundingRec = DomHelper.findFirstChildWithClassName(_this2.containerRef.current, 'rt-table').getBoundingClientRect();

                  // determine current table viewport
                  var maxVisibleXPos = tableBodyBoundingRec.right;
                  var minVisibleXPos = 0 - Math.ceil(_this2.iconWidth / 2);

                  _this2.reorderIndicatorUp.style.top = dropHeaderOffset.top - containerOffset.top - (_this2.iconHeight + 3) + 'px';

                  _this2.reorderIndicatorDown.style.top = dropHeaderOffset.top - containerOffset.top + dropHeader.offsetHeight + 3 + 'px';

                  if (e.pageX > columnCenter) {
                    _this2.reorderIndicatorUp.style.left = targetLeft + dropHeader.offsetWidth - Math.ceil(_this2.iconWidth / 2) + 'px';
                    _this2.reorderIndicatorDown.style.left = targetLeft + dropHeader.offsetWidth - Math.ceil(_this2.iconWidth / 2) + 'px';
                    _this2.dropPosition = 1;
                  } else {
                    _this2.reorderIndicatorUp.style.left = targetLeft - Math.ceil(_this2.iconWidth / 2) + 'px';
                    _this2.reorderIndicatorDown.style.left = targetLeft - Math.ceil(_this2.iconWidth / 2) + 'px';

                    _this2.dropPosition = -1;
                  }

                  if (DomHelper.parseStrDimensionToInt(_this2.reorderIndicatorUp.style.left) > maxVisibleXPos || DomHelper.parseStrDimensionToInt(_this2.reorderIndicatorUp.style.left) < minVisibleXPos) {
                    // do not show indicators if position is outside leftmost or rightmost bounds of the react table
                    _this2.reorderIndicatorUp.style.display = 'none';
                    _this2.reorderIndicatorDown.style.display = 'none';
                  } else {
                    _this2.reorderIndicatorUp.style.display = 'block';
                    _this2.reorderIndicatorDown.style.display = 'block';
                    _this2.reorderIndicatorUp.style.zIndex = 50;
                    _this2.reorderIndicatorDown.style.zIndex = 50;
                  }
                }
              }
            };

            headerParent.ondragleave = function (e) {
              e.preventDefault();

              _this2.counter--;

              var _props$draggableColum9 = _this2.props.draggableColumns,
                  _props$draggableColum10 = _props$draggableColum9.mode,
                  mode = _props$draggableColum10 === undefined ? defaultProps.mode : _props$draggableColum10,
                  _props$draggableColum11 = _props$draggableColum9.onDragEnterClassName,
                  onDragEnterClassName = _props$draggableColum11 === undefined ? defaultProps.onDragEnterClassName : _props$draggableColum11;


              if (mode === DragMode.REORDER) {
                if (_this2.counter === 0) {
                  _this2.reorderIndicatorUp.style.display = 'none';
                  _this2.reorderIndicatorDown.style.display = 'none';
                }
              } else if (mode === DragMode.SWAP) {
                if (_this2.counter === 0 && onDragEnterClassName) {
                  var dropHeader = _this2.findParentHeader(e.target);
                  DomHelper.removeClass(dropHeader.firstChild, onDragEnterClassName);
                }
              }
            };

            // ondrop event
            headerParent.ondrop = function (e) {
              e.preventDefault();

              // prevent bug when using multiple react tables
              if (!_this2.draggedColumn) return;

              var _props$draggableColum12 = _this2.props.draggableColumns,
                  _props$draggableColum13 = _props$draggableColum12.mode,
                  mode = _props$draggableColum13 === undefined ? defaultProps.mode : _props$draggableColum13,
                  onDropSuccess = _props$draggableColum12.onDropSuccess;


              if (mode === DragMode.REORDER) {
                // only move if the dragged column is meets position threshold
                var dragIndex = DomHelper.index(_this2.draggedColumn);
                var dropIndex = DomHelper.index(_this2.findParentHeader(e.target));
                var allowDrop = dragIndex !== dropIndex;

                if (allowDrop && (dropIndex - dragIndex === 1 && _this2.dropPosition === -1 || dragIndex - dropIndex === 1 && _this2.dropPosition === 1)) {
                  allowDrop = false;
                }

                if (allowDrop) {
                  // readjust dropIndex value for edge cases
                  // if dragging a column from left to right
                  if (_this2.dragged < dropIndex) {
                    if (_this2.dropPosition === -1) {
                      dropIndex = dropIndex - 1;
                    }
                  } else {
                    // dragging a column from right to left
                    if (_this2.dropPosition === 1) {
                      dropIndex = dropIndex + 1;
                    }
                  }

                  _this2.reorder = { a: dropIndex, b: _this2.dragged };

                  if (onDropSuccess) {
                    var containerOffset = DomHelper.getOffset(_this2.containerRef.current);

                    // adjust offSets to be respective to the containerOffset
                    var oldOffset = DomHelper.getOffset(_this2.draggedColumn);
                    oldOffset.top = oldOffset.top - containerOffset.top;
                    oldOffset.left = oldOffset.left - containerOffset.left;

                    var newOffset = DomHelper.getOffset(_this2.findParentHeader(e.target));
                    newOffset.top = newOffset.top - containerOffset.top;
                    newOffset.left = newOffset.left - containerOffset.left;

                    // (draggedColumn, targetColumn, oldIndex, newIndex, oldOffset, newOffset)
                    onDropSuccess(_this2.reorder, _this2.currentColumnOrder[_this2.dragged], _this2.currentColumnOrder[dropIndex], _this2.dragged, dropIndex, oldOffset, newOffset);

                    _this2.reorder = [];
                  }

                  // trigger a re-render
                  _this2.setState({ trigger: Math.random(), firstLoad: false });
                }
              } else if (mode === DragMode.SWAP) {
                _this2.reorder = { a: i, b: _this2.dragged };

                if (onDropSuccess) {
                  // (draggedColumn, targetColumn, oldIndex, newIndex)
                  onDropSuccess(_this2.reorder, _this2.currentColumnOrder[_this2.dragged], _this2.currentColumnOrder[i], _this2.dragged, i);

                  _this2.reorder = [];
                }

                // trigger a re-render
                _this2.setState({ trigger: Math.random(), firstLoad: false });
              }

              _this2.dragged = null;
              _this2.draggedName = null;
              _this2.draggedColumn = null;
              _this2.dropPosition = null;
              _this2.counter = 0;
              _this2.reorderIndicatorUp.style.display = 'none';
              _this2.reorderIndicatorDown.style.display = 'none';
            };

            // ondragend event
            headerParent.ondragend = function (e) {
              var _props$draggableColum14 = _this2.props.draggableColumns,
                  disableTableScroll = _props$draggableColum14.disableTableScroll,
                  overflow = _props$draggableColum14.overflow;


              e.stopPropagation();

              if (_this2.clone) {
                document.body.removeChild(_this2.clone);
                _this2.clone = null;
              }

              if (disableTableScroll) {
                var tableBody = DomHelper.findFirstChildWithClassName(_this2.containerRef.current, 'rt-table');

                if (tableBody) {
                  tableBody.style.overflow = overflow || defaultProps.overflow;
                }
              }
            };
          }
        });
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (this.props.draggableColumns.draggable.length > 0) this.createDragEvents();
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        if (this.props.draggableColumns.draggable.length > 0) this.createDragEvents();
      }

      // prevent side effects such as accidentally resizing column while dragging a column

    }, {
      key: 'render',
      value: function render() {
        var _this3 = this;

        var _props = this.props,
            columns = _props.columns,
            draggableColumns = _props.draggableColumns,
            rest = objectWithoutProperties(_props, ['columns', 'draggableColumns']);
        var _draggableColumns$dra = draggableColumns.draggable,
            _draggableColumns$mod = draggableColumns.mode,
            onDraggedColumnChange = draggableColumns.onDraggedColumnChange,
            _draggableColumns$reo = draggableColumns.reorderIndicatorUpClassName,
            reorderIndicatorUpClassName = _draggableColumns$reo === undefined ? defaultProps.reorderIndicatorUpClassName : _draggableColumns$reo,
            _draggableColumns$reo2 = draggableColumns.reorderIndicatorDownClassName,
            reorderIndicatorDownClassName = _draggableColumns$reo2 === undefined ? defaultProps.reorderIndicatorDownClassName : _draggableColumns$reo2;


        var reorderIndicatorUp = React.createElement('span', {
          ref: function ref(el) {
            _this3.reorderIndicatorUp = el;
          },
          className: 'arrow arrow-bar is-top ' + reorderIndicatorUpClassName,
          style: { position: 'absolute', display: 'none' }
        });

        var reorderIndicatorDown = React.createElement('span', {
          ref: function ref(el) {
            _this3.reorderIndicatorDown = el;
          },
          className: 'arrow arrow-bar is-bottom ' + reorderIndicatorDownClassName,
          style: { position: 'absolute', display: 'none' }
        });

        var cols = columns.map(function (col) {
          return _extends({}, col, {
            Header: typeof col.Header === 'function' ? React.createElement(
              'div',
              { onClick: _this3.stopPropagation },
              col.Header()
            ) : React.createElement(
              'div',
              { onClick: _this3.stopPropagation },
              col.Header
            )
          });
        });

        // run all reorder events
        //   if (mode && mode === DragMode.SWAP) {
        //     this.reorder.forEach(o => (cols[o.a] = cols.splice(o.b, 1, cols[o.a])[0]))
        //   } else {
        //     // mode: reorder - default
        //     this.reorder.forEach(o => cols.splice(o.a, 0, cols.splice(o.b, 1)[0]))
        //   }

        // track final column order
        this.currentColumnOrder = cols;

        // fire change event?
        if (!this.state.firstLoad) {
          var originalOrder = columns.map(function (col) {
            if (typeof col.accessor === 'function') return col.id;
            return col.accessor;
          });

          var newOrder = cols.map(function (col) {
            if (typeof col.accessor === 'function') return col.id;
            return col.accessor;
          });

          // if order is not equal, then call onDraggedColumnChange prop
          if (JSON.stringify(originalOrder) !== JSON.stringify(newOrder)) {
            if (onDraggedColumnChange) onDraggedColumnChange(cols);
          }
        }

        // render
        return React.createElement(
          'div',
          {
            className: 'rt-draggable-container',
            ref: this.containerRef,
            style: { position: 'relative' }
          },
          React.createElement(Component, _extends({}, rest, {
            draggableColumns: draggableColumns,
            columns: cols,
            ref: function ref(r) {
              return _this3.wrappedInstance = r;
            }
          })),
          reorderIndicatorUp,
          reorderIndicatorDown
        );
      }
    }]);
    return RTFixedDraggableColumn;
  }(React.Component);

  var defaultProps = {
    mode: DragMode.REORDER,
    draggable: [],
    enableColumnWideDrag: true,
    disableTableScroll: false,
    overflow: 'auto',
    useDragImage: true,
    dragImageClassName: 'rt-dragged-item',
    onDragEnterClassName: 'rt-drag-enter-item',
    reorderIndicatorUpClassName: '',
    reorderIndicatorDownClassName: ''
  };

  wrapper.displayName = 'RTDraggableColumn';

  wrapper.propTypes = {
    draggableColumns: PropTypes.shape({
      /** mode to either reorder the column or swap column position on drop */
      mode: PropTypes.oneOf([DragMode.REORDER, DragMode.SWAP]).isRequired,
      /** array of column accessors to allow drag and drop */
      draggable: PropTypes.arrayOf(PropTypes.string),
      /** if {true} then entire header column is draggable.  If {false} then only header column text is draggable.
       * Set to {false} if you experience buggyness when using with react-table column sorting/resizing functionality
       */
      enableColumnWideDrag: PropTypes.bool,
      /** disable ReactTable horizontal/vertical scrolling when dragging a column */
      disableTableScroll: PropTypes.bool,
      /** used with disableTableScroll={true} to reset ReactTable overflow style onDragEnd event */
      overflow: PropTypes.string,
      /** clone dragged column?  useful for applying a different css class */
      useDragImage: PropTypes.bool,
      /** dragImageClassName only applies when useDragImage={true} */
      dragImageClassName: PropTypes.string,
      /** Swap mode only - css class */
      onDragEnterClassName: PropTypes.string,
      /** callback method to be notified when on column drop success - signature: function(draggedColumn, targetColumn, oldIndex, newIndex, oldOffset, newOffset)  */
      onDropSuccess: PropTypes.func,
      /** callback method to be notified when column order changes - signature: function(columns)  */
      onDraggedColumnChange: PropTypes.func,
      /** additional className for reorder indicator Up */
      reorderIndicatorUpClassName: PropTypes.string,
      /** additional className for reorder indicator Down */
      reorderIndicatorDownClassName: PropTypes.string
    })
  };

  return wrapper;
});

exports.DragMode = DragMode;
exports.default = index$1;
//# sourceMappingURL=index.js.map
