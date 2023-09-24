({
 doInit : function(component, event, helper) {
        component.set("v.lastRefreshedDate", new Date());
        component.set("v.timeZone",$A.get("$Locale.timezone"));
  helper.fetchOrgLimits(component);
 }
})