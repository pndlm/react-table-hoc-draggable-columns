# 1.2.1 (2019-10-9)

Bug fix for correctly converting a HTML Collection to Javascript array (was broken for some browsers)

# 1.2.0 (2019-10-9)

New prop `onDropSuccess` callback to obtain column information and indexes for the ondrop event (probably more info than you want to know!)

Breaking Change: Headers are now wrapped by a `div` rather than `span`. This was necessary to support column.header defined as a component

# 1.1.6 (2019-09-23)

Bug fix for reorder indicators flickering when dragleave event fired when hovering over a child element

Props for additional class names for reorder indicator up and reorder indicator down

Do not allow reorder indicators to appear outside X bounds of React Table (apparent when disableTableScroll={false})

# 1.1.0 (2019-09-19)

New prop `enableColumnWideDrag` to control a column's draggable hotspot - Set to {false} if you experience buggyness when using with react-table column sorting/resizing functionality

Bug fix for calls made to `onDraggedColumnChange` when column ordering has not changed

# 1.0.1 (2019-08-09)

Bug fix for reordering columns not working as expected under certain edge cases

# 1.0.0 (2019-07-31)

Initial release
