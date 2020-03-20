using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using RxWeb.Core.Annotations;
using RxWeb.Core.Data.Annotations;
using RxWeb.Core.Sanitizers;
using BookMyShow.BoundedContext.SqlContext;
namespace BookMyShow.Models.Main
{
    [Table("vCityLookup",Schema="dbo")]
    public partial class vCityLookup
    {
		#region ApplicationObjectId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion ApplicationObjectId Annotations

        public int ApplicationObjectId { get; set; }


        public string ApplicationObjectName { get; set; }


        public vCityLookup()
        {
        }
	}
}