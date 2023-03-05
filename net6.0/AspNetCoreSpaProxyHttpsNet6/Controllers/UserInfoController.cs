using Microsoft.AspNetCore.Mvc;

namespace AspNetCoreSpaProxyHttpsNet6.Controllers;

public class UserInfoController : Controller
{
  [HttpGet,Route("/userinfo")]
  public IActionResult Index()
  {
    return Json(new { username = "Alex" });
  }
}