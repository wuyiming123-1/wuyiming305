// ============================================================
// 文件：js/wym_books_tab.js
// 作者：吴一鸣    建立时间：2026-11-04
// 大模型：GLM-5.3-Flash
// 功能：文学社科栏目可复用 Tab 选项卡组件（外部引用）
//       监听选项卡点击事件；先清除所有选项卡的选中状态，
//       再设置当前元素的选中状态，并切换对应的图书与订阅榜面板。
// ============================================================

/**
 * 初始化一组可复用的选项卡
 * @param {Object} wymOptions 配置对象：
 *   wymTabSelector   - 选项卡按钮的选择器
 *   wymPanelSelector - 内容面板的选择器（顺序与选项卡一一对应）
 *   wymActiveClass   - 选中状态类名
 *   wymDefaultIndex  - 默认选中的选项卡下标
 */
function wym_initBookTabs(wymOptions) {
    var wymTabs = document.querySelectorAll(wymOptions.wymTabSelector);
    var wymPanels = document.querySelectorAll(wymOptions.wymPanelSelector);
    var wymActiveClass = wymOptions.wymActiveClass || "wym-active";

    // 激活指定选项卡：先清除所有选项卡的选中状态，再设置当前元素的选中状态
    function wym_activateTab(wymTargetTab) {
        // 第一步：先清除所有选项卡的选中状态，并隐藏全部内容面板
        wymTabs.forEach(function (wymTab, wymI) {
            wymTab.classList.remove(wymActiveClass);
            wymTab.setAttribute("aria-selected", "false");
            if (wymPanels[wymI]) {
                wymPanels[wymI].classList.remove(wymActiveClass);
            }
        });

        // 第二步：再设置当前元素的选中状态，并显示对应内容面板
        var wymIndex = Array.prototype.indexOf.call(wymTabs, wymTargetTab);
        if (wymIndex > -1 && wymPanels[wymIndex]) {
            wymTargetTab.classList.add(wymActiveClass);
            wymTargetTab.setAttribute("aria-selected", "true");
            wymPanels[wymIndex].classList.add(wymActiveClass);
        }
    }

    // 为每个选项卡按钮绑定点击监听事件
    wymTabs.forEach(function (wymTab) {
        wymTab.addEventListener("click", function () {
            wym_activateTab(wymTab);
        });
    });

    // 按配置设置默认选中的选项卡
    var wymDefaultTab = wymTabs[wymOptions.wymDefaultIndex || 0];
    if (wymDefaultTab) {
        wym_activateTab(wymDefaultTab);
    }
}

// 页面加载完成后初始化文学社科选项卡：流行小说（下标0）为默认选项
document.addEventListener("DOMContentLoaded", function () {
    wym_initBookTabs({
        wymTabSelector: ".wym-tab",
        wymPanelSelector: ".wym-tab-panel",
        wymActiveClass: "wym-active",
        wymDefaultIndex: 0
    });
});
