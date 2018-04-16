/**
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your application specific code will go here
 */
define(['ojs/ojcore', 'ojs/ojrouter', 'ojs/ojarraytabledatasource', 'ojs/ojoffcanvas', 'ojs/ojbutton'],
  function(oj) {
     function ControllerViewModel() {
      var self = this;

      // Router setup
      self.router = oj.Router.rootInstance;
      self.router.configure({
       'dashboard': {label: 'PLAN YOUR STORY', isDefault: true},
       'incidents': {label: '회원정보수정'},
       'customers': {label: '방문예약신청'},       
       'customers': {label: '방문예약신청(상시)'},
       'profile': {label: '방문예약 신청현황'},
       'profile': {label: '공지사항'},
       'about': {label: '챗봇과 대화하기'}
      });
      oj.Router.defaults['urlAdapter'] = new oj.Router.urlParamAdapter();
      self.moduleConfig = self.router.moduleConfig;

      // Navigation setup
      var navData = [
      {name: 'PLAN YOUR STORY', id: 'dashboard',
       iconClass: 'oj-navigationlist-item-icon demo-icon-font-24 demo-home-icon-24'},
      {name: '보험상품', id: 'incidents',
       iconClass: 'oj-navigationlist-item-icon demo-icon-font-24 demo-palette-icon-24'},
      {name: '고객센터', id: 'customers',
       iconClass: 'oj-navigationlist-item-icon demo-icon-font-24 demo-person-icon-24'},
      {name: '라이프플래너', id: 'profile',
       iconClass: 'oj-navigationlist-item-icon demo-icon-font-24 demo-edit-icon-24'},
      {name: '회사소개', id: 'profile',
       iconClass: 'oj-navigationlist-item-icon demo-icon-font-24 demo-copy-icon-24'},
      {name: '공시실', id: 'customers',
       iconClass: 'oj-navigationlist-item-icon demo-icon-font-24 demo-catalog-icon-24'},              
      {name: '챗봇과 대화하기', id: 'about',
       iconClass: 'oj-navigationlist-item-icon demo-icon-font-24 demo-chat-icon-24'},       


      ];
      self.navDataSource = new oj.ArrayTableDataSource(navData, {idAttribute: 'id'});

      // Drawer setup
      self.toggleDrawer = function() {
        return oj.OffcanvasUtils.toggle({selector: '#navDrawer', modality: 'modal', content: '#pageContent'});
      }
      // Add a close listener so we can move focus back to the toggle button when the drawer closes
      $("#navDrawer").on("ojclose", function() { $('#drawerToggleButton').focus(); });

      // Header Setup
      self.getHeaderModel = function() {
        var headerFactory = {
          createViewModel: function(params, valueAccessor) {
            var model =  {
              pageTitle: self.router.currentState().label,
              handleBindingsApplied: function(info) {
                // Adjust content padding after header bindings have been applied
                self.adjustContentPadding();
              },
              toggleDrawer: self.toggleDrawer
            };
            return Promise.resolve(model);
          }
        }
        return headerFactory;
      }

      // Method for adjusting the content area top/bottom paddings to avoid overlap with any fixed regions. 
      // This method should be called whenever your fixed region height may change.  The application
      // can also adjust content paddings with css classes if the fixed region height is not changing between 
      // views.
      self.adjustContentPadding = function () {
        var topElem = document.getElementsByClassName('oj-applayout-fixed-top')[0];
        var contentElem = document.getElementsByClassName('oj-applayout-content')[0];
        var bottomElem = document.getElementsByClassName('oj-applayout-fixed-bottom')[0];

        if (topElem) {
          contentElem.style.paddingTop = topElem.offsetHeight+'px';
        }
        if (bottomElem) {
          contentElem.style.paddingBottom = bottomElem.offsetHeight+'px';
        }
        // Add oj-complete marker class to signal that the content area can be unhidden.
        // See the override.css file to see when the content area is hidden.
        contentElem.classList.add('oj-complete');
      }
    }

    return new ControllerViewModel();
  }
);
