var _jsxFileName = "/home/jordan/Code/react-slider/src/components/ReactSlider/__tests__/ReactSlider.test.js",
    _this = this;

import React from 'react';
import renderer from 'react-test-renderer';
import ReactSlider from '../ReactSlider';
describe('<ReactSlider>', function () {
  it('can render', function () {
    var tree = renderer.create( /*#__PURE__*/React.createElement(ReactSlider, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 38
      }
    })).toJSON();
    expect(tree).toMatchSnapshot();
  });
  describe('event handlers', function () {
    beforeEach(function () {
      global.document = {
        addEventListener: jest.fn(),
        removeEventListener: jest.fn()
      };
    });
    afterEach(function () {
      delete global.document;
    });
    it('does not call any event handlers if the value does not change', function () {
      var onBeforeChange = jest.fn();
      var onChange = jest.fn();
      var onAfterChange = jest.fn();
      var testRenderer = renderer.create( /*#__PURE__*/React.createElement(ReactSlider, {
        onBeforeChange: onBeforeChange,
        onChange: onChange,
        onAfterChange: onAfterChange,
        thumbClassName: "test-thumb",
        min: 0,
        step: 1,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 17
        }
      }));
      var testInstance = testRenderer.root;
      var thumb = testInstance.findByProps({
        className: 'test-thumb test-thumb-0 '
      });
      var addEventListener = global.document.addEventListener;
      expect(addEventListener).not.toHaveBeenCalled(); // simulate focus on thumb

      thumb.props.onFocus();
      expect(addEventListener).toHaveBeenCalledTimes(3);
      expect(addEventListener.mock.calls[0][0]).toBe('keydown');
      expect(addEventListener.mock.calls[1][0]).toBe('keyup');
      expect(addEventListener.mock.calls[2][0]).toBe('focusout');
      var onKeyDown = addEventListener.mock.calls[0][1];
      expect(onBeforeChange).not.toHaveBeenCalled();
      expect(onChange).not.toHaveBeenCalled();
      expect(onAfterChange).not.toHaveBeenCalled(); // simulate keydown

      onKeyDown({
        key: 'ArrowLeft',
        preventDefault: function preventDefault() {}
      });
      expect(onBeforeChange).not.toHaveBeenCalled();
      expect(onChange).not.toHaveBeenCalled();
      expect(onAfterChange).not.toHaveBeenCalled(); // simulate keydown

      onKeyDown({
        key: 'Home',
        preventDefault: function preventDefault() {}
      });
      expect(onBeforeChange).not.toHaveBeenCalled();
      expect(onChange).not.toHaveBeenCalled();
      expect(onAfterChange).not.toHaveBeenCalled(); // simulate keydown

      onKeyDown({
        key: 'PageDown',
        preventDefault: function preventDefault() {}
      });
      expect(onBeforeChange).not.toHaveBeenCalled();
      expect(onChange).not.toHaveBeenCalled();
      expect(onAfterChange).not.toHaveBeenCalled();
    });
    it('calls onBeforeChange only once before onChange', function () {
      var onBeforeChange = jest.fn();
      var onChange = jest.fn();
      var testRenderer = renderer.create( /*#__PURE__*/React.createElement(ReactSlider, {
        onBeforeChange: onBeforeChange,
        onChange: onChange,
        thumbClassName: "test-thumb",
        min: 0,
        step: 1,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 17
        }
      }));
      var testInstance = testRenderer.root;
      var thumb = testInstance.findByProps({
        className: 'test-thumb test-thumb-0 '
      });
      var addEventListener = global.document.addEventListener;
      expect(addEventListener).not.toHaveBeenCalled(); // simulate focus on thumb

      thumb.props.onFocus();
      expect(addEventListener).toHaveBeenCalledTimes(3);
      expect(addEventListener.mock.calls[0][0]).toBe('keydown');
      expect(addEventListener.mock.calls[1][0]).toBe('keyup');
      expect(addEventListener.mock.calls[2][0]).toBe('focusout');
      var onKeyDown = addEventListener.mock.calls[0][1];
      expect(onBeforeChange).not.toHaveBeenCalled();
      expect(onChange).not.toHaveBeenCalled(); // simulate keydown

      onKeyDown({
        key: 'ArrowRight',
        preventDefault: function preventDefault() {}
      });
      expect(onBeforeChange).toHaveBeenCalledTimes(1);
      expect(onBeforeChange).toHaveBeenCalledWith(0);
      expect(onBeforeChange.mock.invocationCallOrder[0]).toBeLessThan(onChange.mock.invocationCallOrder[0]);
      expect(onChange).toHaveBeenCalledTimes(1);
      expect(onChange).toHaveBeenCalledWith(1); // simulate keydown

      onKeyDown({
        key: 'ArrowRight',
        preventDefault: function preventDefault() {}
      });
      expect(onBeforeChange).toHaveBeenCalledTimes(1);
      expect(onBeforeChange).toHaveBeenCalledWith(0);
      expect(onChange).toHaveBeenCalledTimes(2);
      expect(onChange).toHaveBeenCalledWith(2);
    });
    it('calls onChange for every change', function () {
      var onChange = jest.fn();
      var testRenderer = renderer.create( /*#__PURE__*/React.createElement(ReactSlider, {
        onChange: onChange,
        thumbClassName: "test-thumb",
        min: 0,
        step: 1,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 17
        }
      }));
      var testInstance = testRenderer.root;
      var thumb = testInstance.findByProps({
        className: 'test-thumb test-thumb-0 '
      });
      var addEventListener = global.document.addEventListener;
      expect(addEventListener).not.toHaveBeenCalled(); // simulate focus on thumb

      thumb.props.onFocus();
      expect(addEventListener).toHaveBeenCalledTimes(3);
      expect(addEventListener.mock.calls[0][0]).toBe('keydown');
      expect(addEventListener.mock.calls[1][0]).toBe('keyup');
      expect(addEventListener.mock.calls[2][0]).toBe('focusout');
      var onKeyDown = addEventListener.mock.calls[0][1];
      expect(onChange).not.toHaveBeenCalled(); // simulate keydown

      onKeyDown({
        key: 'ArrowRight',
        preventDefault: function preventDefault() {}
      });
      expect(onChange).toHaveBeenCalledTimes(1);
      expect(onChange).toHaveBeenCalledWith(1); // simulate keydown

      onKeyDown({
        key: 'ArrowLeft',
        preventDefault: function preventDefault() {}
      });
      expect(onChange).toHaveBeenCalledTimes(2);
      expect(onChange).toHaveBeenCalledWith(0);
    });
    it('calls onAfterChange only once after onChange', function () {
      var onChange = jest.fn();
      var onAfterChange = jest.fn();
      var testRenderer = renderer.create( /*#__PURE__*/React.createElement(ReactSlider, {
        onChange: onChange,
        onAfterChange: onAfterChange,
        thumbClassName: "test-thumb",
        min: 0,
        step: 1,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 17
        }
      }));
      var testInstance = testRenderer.root;
      var thumb = testInstance.findByProps({
        className: 'test-thumb test-thumb-0 '
      });
      var addEventListener = global.document.addEventListener;
      expect(addEventListener).not.toHaveBeenCalled(); // simulate focus on thumb

      thumb.props.onFocus();
      expect(addEventListener).toHaveBeenCalledTimes(3);
      expect(addEventListener.mock.calls[0][0]).toBe('keydown');
      expect(addEventListener.mock.calls[1][0]).toBe('keyup');
      expect(addEventListener.mock.calls[2][0]).toBe('focusout');
      var onKeyDown = addEventListener.mock.calls[0][1];
      var onKeyUp = addEventListener.mock.calls[1][1];
      expect(onChange).not.toHaveBeenCalled();
      expect(onAfterChange).not.toHaveBeenCalled(); // simulate keydown

      onKeyDown({
        key: 'ArrowRight',
        preventDefault: function preventDefault() {}
      });
      expect(onChange).toHaveBeenCalledTimes(1);
      expect(onChange).toHaveBeenCalledWith(1);
      expect(onAfterChange).not.toHaveBeenCalled(); // simulate keydown

      onKeyDown({
        key: 'ArrowRight',
        preventDefault: function preventDefault() {}
      });
      expect(onChange).toHaveBeenCalledTimes(2);
      expect(onChange).toHaveBeenCalledWith(2);
      expect(onAfterChange).not.toHaveBeenCalled(); // simulate keyup

      onKeyUp();
      expect(onChange).toHaveBeenCalledTimes(2);
      expect(onAfterChange).toHaveBeenCalledTimes(1);
      expect(onAfterChange).toHaveBeenCalledWith(2);
      expect(onAfterChange.mock.invocationCallOrder[0]).toBeGreaterThan(onChange.mock.invocationCallOrder[1]);
    });
  });
  it('should replace state value when props value changes', function () {
    var mockRenderThumb = jest.fn();
    var mockFirstValue = 40;
    var mockSecondValue = 80;
    var testRenderer = renderer.create( /*#__PURE__*/React.createElement(ReactSlider, {
      thumbClassName: "test-thumb",
      renderThumb: mockRenderThumb,
      value: mockFirstValue,
      min: 0,
      step: 1,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 13
      }
    }));
    expect(mockRenderThumb).toHaveBeenCalledTimes(1);
    expect(mockRenderThumb.mock.calls[0][1].value).toBe(mockFirstValue);
    renderer.act(function () {
      testRenderer.update( /*#__PURE__*/React.createElement(ReactSlider, {
        thumbClassName: "test-thumb",
        renderThumb: mockRenderThumb,
        value: mockSecondValue,
        min: 0,
        step: 1,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246,
          columnNumber: 17
        }
      }));
    });
    expect(mockRenderThumb).toHaveBeenCalledTimes(2);
    expect(mockRenderThumb.mock.calls[1][1].value).toBe(mockSecondValue);
  });
});