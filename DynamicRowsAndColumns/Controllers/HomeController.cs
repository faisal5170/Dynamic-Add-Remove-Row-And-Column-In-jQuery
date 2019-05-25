using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using DynamicRowsAndColumns.Models;
using Newtonsoft.Json;

namespace DynamicRowsAndColumns.Controllers
{
    public class HomeController : Controller
    {
        private readonly Context _context;
        public HomeController()
        {
            _context = new Context();
        }
        public ActionResult Index()
        {
            return View();
        }
        [HttpPost]
        public ActionResult Index(string JsonData)
        {
            try
            {
                DynaTable TempData = (DynaTable)Deserialize(JsonData, typeof(DynaTable));
                DynaTable dt = new DynaTable()
                {
                    Created_By = "Test",
                    Created_Date = DateTime.Now,
                    Soil_Rows = TempData.Soil_Rows,
                    Soil_Columns = TempData.Soil_Columns,
                    Soil_Footer = TempData.Soil_Footer,
                    Soil_Header = TempData.Soil_Header
                };
                _context.DynaTables.Add(dt);
                _context.SaveChanges();
            }
            catch (Exception ex)
            {
                
            }
            return View();
        }
        public static object Deserialize(string json, Type type)
        {
            return JsonConvert.DeserializeObject(json, type);
        }
    }
}