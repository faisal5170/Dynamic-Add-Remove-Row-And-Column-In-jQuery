using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace DynamicRowsAndColumns.Models
{
    public class DynaTable
    {
        [Key]
        public int Id { get; set; }

        public string Created_By { get; set; }

        public Nullable<System.DateTime> Created_Date { get; set; }

        public string Soil_Rows { get; set; }

        public string Soil_Columns { get; set; }

        public string Soil_Header { get; set; }

        public string Soil_Footer { get; set; }
    }
}