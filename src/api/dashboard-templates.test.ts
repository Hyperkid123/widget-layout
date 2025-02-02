import { WidgetTypes } from '../Components/Widgets/widgetTypes';
import { ExtendedLayoutItem, LayoutWithTitle, mapExtendedLayoutToLayoutWithTitle } from './dashboard-templates';

describe('mapExtendedLayoutToLayoutWithTitle', function () {
  let layoutWithTitle: LayoutWithTitle;
  let extendedLayoutItem: ExtendedLayoutItem;

  beforeEach(function () {
    layoutWithTitle = {
      h: 100,
      i: '1',
      maxH: undefined,
      minH: undefined,
      static: undefined,
      title: 'foo',
      w: 100,
      x: 0,
      y: 0,
    };
    extendedLayoutItem = { ...layoutWithTitle, widgetType: WidgetTypes.LargeWidget };
  });
  test('handles ExtendedLayoutItem type objects', function () {
    expect(mapExtendedLayoutToLayoutWithTitle(extendedLayoutItem)).toEqual(layoutWithTitle);
  });
});
